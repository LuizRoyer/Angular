import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: boolean[] = [true, true, true];

  @Input() public tentativas: number;

  constructor() { }
  ngOnChanges(): void {//executa sempre quando o Input for alterado
    if (this.tentativas !== this.coracoes.length) {
      let i = this.coracoes.length - this.tentativas;
      this.coracoes[i-1] = false;
    }
  }
  ngOnInit(): void {// Executa apenas no Inicio
  }



}
