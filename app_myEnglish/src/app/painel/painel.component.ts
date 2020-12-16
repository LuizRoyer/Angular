import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase :';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.carregarProximaFrase();
  }

  ngOnInit(): void {
  }

  carregarProximaFrase() {
    this.rodadaFrase = this.frases[this.rodada];
  }
  atualizaResposta(resposta: Event) {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verrificarResposta() {

    if (this.rodadaFrase.frasePtBr === this.resposta) {

      //trocar pergunta da rodada     
      this.rodada++;
      //atualizar barra progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      if (this.rodada === this.frases.length) {
        // metodo para apresentar a vitoria do jogo
        this.encerrarJogo.emit('vitoria')
      }

      this.carregarProximaFrase();

      //limpar a resposta
      this.resposta = '';

    } else {
      this.tentativas--;
      alert('A tradução não está correta');

      if (this.tentativas === -1) {
        // metodo para apresentar a derrota do jogo
        this.encerrarJogo.emit('derrota')
      }
    }
  }

}
