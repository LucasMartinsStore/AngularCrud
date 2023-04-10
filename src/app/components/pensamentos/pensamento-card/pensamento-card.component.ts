import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/interfaces/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.scss'],
})
export class PensamentoCardComponent implements OnInit {
  @Input()
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Lucas',
    modelo: 'modelo3',
    favorito: false,
  };

  constructor(private pensamentoService: PensamentoService) {}

  @Input()
  listaFavoritos: Pensamento[] = [];

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }

  isIconFavorite(): string {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }
  atualizarFavorito() {
    this.pensamentoService.mudarStatusFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
    });
  }
}
