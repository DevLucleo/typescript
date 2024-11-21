import { Pergunta } from "./Pergunta.class"
import { Pesquisa } from "./Pesquisa.class";

export class PerguntaNPS extends Pergunta {

  qtdPromotores: number;
  qtdPassivos: number;
  qtdDetratores: number;

  constructor(nomeEmpresa: string){
    super('NPS');
    this.titulo = `De 1 a 10, o quanto você indica o ${nomeEmpresa} a um amigo?`;
    
  }
  
  public calcNPS(){
    let total = this.qtdPromotores + this.qtdPassivos + this.qtdDetratores;
    return this.qtdPromotores - this.qtdDetratores / total;    
  }

}