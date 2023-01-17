import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.scss'],
})
export class PensamentoCardComponent implements OnInit {
  @Input()
  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Lucas',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
