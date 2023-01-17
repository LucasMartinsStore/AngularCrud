import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss'],
})
export class ListarPensamentosComponent implements OnInit {
  listPensamentos = [
    {
      conteudo: 'Passo informações para componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolores libero, quibusdam reprehenderit nemo in molestias atque quod totam est explicabo consequatur aliquid eos architecto necessitatibus praesentium maxime amet accusamus! zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzs',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
