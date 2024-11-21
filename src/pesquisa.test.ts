import { Pergunta } from "./Pergunta.class";
import { Pesquisa } from "./Pesquisa.class"

describe('Teste de pesquisas', () => {
    const pesquisa = new Pesquisa();
    pesquisa.titulo = 'NPS';
    pesquisa.explicacao = 'Avaliação da experiência do cliente!';
    let pergunta = new Pergunta();
    pergunta.titulo = "De 1 a 10, o quanto vc indica o iQuiz a um amigo?";
    pesquisa.perguntas.push(pergunta);

    test('Deve exibir o langth de perguntas', () => {        
        expect(pesquisa.perguntas.length).toBe(1);

    });

})