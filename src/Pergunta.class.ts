class Pergunta{
  
  titulo: string = "";
  private tipo: 'multiplaescolha' | 'escolhaunica' | 'texto' = 'multiplaescolha';
  protected ordem: number = 1;
  explicacao: string = "";
  opcoesRespostas: string[] = [""];

  public constructor(){

  }

  public alterarTipoPergunta(novoTipo:'multiplaescolha' | 'escolhaunica' | 'texto'){
    if(this.tipo == 'texto'){
      this.tipo = novoTipo;      
    }
  }

}