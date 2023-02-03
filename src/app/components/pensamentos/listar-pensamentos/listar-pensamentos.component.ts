import { Pensamento } from './../../../interfaces/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  carregarPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.carregarPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.carregarPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
