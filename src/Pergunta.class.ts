import { TipoPergunta } from "./PerguntaTipo.type";
import { Resposta } from "./Resposta.class";

export class Pergunta{
  
  titulo: string = "";
  private tipo: TipoPergunta;
  protected ordem: number = 1;
  explicacao: string = "";
  opcoesRespostas: Resposta[] = [];
  opcaoSelecionada: Resposta;

  public constructor(){

  }

  public alterarTipoPergunta(novoTipo:'multiplaescolha' | 'escolhaunica' | 'texto'):void | boolean{
    if(this.tipo == 'texto'){
      this.tipo = novoTipo;      
    } else 
      return false;
    return;
  }

}