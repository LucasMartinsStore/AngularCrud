import { PensamentoService } from 'src/app/services/pensamento.service';
import { Pensamento } from 'src/app/interfaces/pensamento';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrls: ['./editar-pensamentos.component.scss'],
})
export class EditarPensamentosComponent implements OnInit {
  forms!: FormGroup;
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.forms = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [
          pensamento.conteudo,
          Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)]),
        ],
        autoria: [
          pensamento.autoria,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/[a-z]+/g),
            Validators.pattern(/[a-z]/),
          ]),
        ],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito],
      });
    });
  }
  editarPensamento() {
    this.service.editar(this.forms.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
  habilitarBotao(): string {
    if (this.forms.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
