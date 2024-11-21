import { Pergunta } from "./Pergunta.class";
import { PerguntaNPS } from "./PerguntaNPS.class";
import { Pesquisa } from "./Pesquisa.class"

describe('Teste de pesquisas', () => {
    const pesquisa = new Pesquisa();
    pesquisa.titulo = 'NPS';
    pesquisa.explicacao = 'Avaliação da experiência do cliente!';
    
    let perguntaNPS = new PerguntaNPS('iQuiz');
    pesquisa.perguntas.push(perguntaNPS);
    
    let pergunta2 = new Pergunta('escolhaunica');
    pergunta2.titulo = "O que você achou do nosso atendimento?";
    pergunta2.opcoesRespostas.push({
        descricao: 'Excelente'
    });
    pergunta2.opcoesRespostas.push({
        descricao: 'Bom'
    });
    pergunta2.opcoesRespostas.push({
        descricao: 'Ruim'
    });
    pesquisa.perguntas.push(perguntaNPS);

    test('Deve exibir o langth de perguntas', () => {        
        expect(pesquisa.perguntas.length).toBe(2);
    });

    test('A pergunta 2 deve ter 3 opções de resposta', () => {        
        expect(pesquisa.perguntas[1].opcoesRespostas.length).toBe(3);
    });

})