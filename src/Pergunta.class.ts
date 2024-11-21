import { TipoPergunta } from "./PerguntaTipo.type";
import { Pesquisa } from "./Pesquisa.class";
import { Resposta } from "./Resposta.class";

export class Pergunta{
  
  titulo: string = "";
  private tipo: TipoPergunta;
  protected ordem: number = 1;
  explicacao: string = "";
  indicadorIquiz:number;
  opcoesRespostas: Resposta[] = [];
  opcaoSelecionada: number;

  public constructor(tipoPergunta: TipoPergunta){
    this.tipo = tipoPergunta;
    this.indicadorIquiz = 0;
  }

  public alterarTipoPergunta(novoTipo: TipoPergunta):void | boolean{
    if(this.tipo == 'texto'){
      this.tipo = novoTipo;      
    } else 
      return false;
    return;
  }

  public calcIndicadoriQuiz(pergunta: Pergunta){
    if(this.tipo == 'texto') return false;
    if(!pergunta.opcaoSelecionada) return false;
    return (pergunta.opcaoSelecionada / pergunta.opcoesRespostas.length) * 10;
  }

}