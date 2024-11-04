import { TipoPergunta } from "./PerguntaTipo.type";

export class Pergunta{
  
  titulo: string = "";
  private tipo: TipoPergunta;
  protected ordem: number = 1;
  explicacao: string = "";
  opcoesRespostas: string[] = [""];
  opcaoSelecionada: string;

  public constructor(){

  }

  public alterarTipoPergunta(novoTipo:'multiplaescolha' | 'escolhaunica' | 'texto'){
    if(this.tipo == 'texto'){
      this.tipo = novoTipo;      
    }
  }

}