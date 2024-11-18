import { Cliente } from './Cliente.class';
import { Pesquisa } from './Pesquisa.class';
import { ResultadoItem } from './ResultadoItem.class';

export class Resultado{
    pesquisa: Pesquisa;
    dataHora: string;
    cliente: Cliente;
    itens: ResultadoItem[] = [];
}