import { Pensamento } from './../../../interfaces/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  forms!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.forms = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/[a-z]+/g),
        ]),
      ],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    if (this.forms.valid) {
      this.service.criar(this.forms.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
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
