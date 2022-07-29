const score = new Score()
const cronometro =new Cronometro()
    setInterval(() => {
    cronometro.atualizaCronometro()
    }, 1000);


const orientacao = {
    VERTICAL: 'VERTICAL',
    HORIZONTAL: 'HORIZONTAL',
}
//Casas com uma mesma letra pertencentes a duas palavras (horizontal e vertical)
const casa1P = new Casa('1', 'P')
const casa3I = new Casa('3', 'I')
const casa3J = new Casa('3', 'J')
const casa3K = new Casa('3', 'K')
const casa3M = new Casa('3', 'M')
const casa3O = new Casa('3', 'O')
const casa3P = new Casa('3', 'P')
const casa4I = new Casa('4', 'I')
const casa4J = new Casa('4', 'J')
const casa4K = new Casa('4', 'K')
const casa6I = new Casa('6', 'I')
const casa6J = new Casa('6', 'J')
const casa6K = new Casa('6', 'K')
const casa6M = new Casa('6', 'M')
const casa7I = new Casa('7', 'I')
const casa7J = new Casa('7', 'J')
const casa7K = new Casa('7', 'K')
const casa7M = new Casa('7', 'M')
const casa8I = new Casa('8', 'I')
const casa8P = new Casa('8', 'P')
const casa8Q = new Casa('8', 'Q')
const casa8R = new Casa('8', 'R')
const casa9B = new Casa('9', 'B')
const casa9C = new Casa('9', 'C')
const casa9F = new Casa('9', 'F')
const casa9I = new Casa('9', 'I')
const casa9M = new Casa('9', 'M')
const casa9P = new Casa('9', 'P')
const casa9Q = new Casa('9', 'Q')
const casa9R = new Casa('9', 'R')
const casa10F = new Casa('10', 'F')
const casa10I = new Casa('10', 'I')
const casa10M = new Casa('10', 'M')
const casa11A = new Casa('11', 'A')
const casa11B = new Casa('11', 'B')
const casa11C = new Casa('11', 'C')
const casa11F = new Casa('11', 'F')
const casa11I = new Casa('11', 'I')
const casa12F = new Casa('12', 'F')
const casa12I = new Casa('12', 'I')
const casa12M = new Casa('12', 'M')
const casa12N = new Casa('12', 'N')
const casa13C = new Casa('13', 'C')
const casa13F = new Casa('13', 'F')
const casa13I = new Casa('13', 'I')
const casa13M = new Casa('13', 'M')
const casa13N = new Casa('13', 'N')
const casa13O = new Casa('13', 'O')
const casa14F = new Casa('14', 'F')
const casa14I = new Casa('14', 'I')
const casa14N = new Casa('14', 'N')
const casa14O = new Casa('14', 'O')
const casa15D = new Casa('15', 'D')
const casa15F = new Casa('15', 'F')
const casa15M = new Casa('15', 'M')
const casa15N = new Casa('15', 'N')
const casa15O = new Casa('15', 'O')
const casa15P = new Casa('15', 'P')
const casa15Q = new Casa('15', 'Q')
const casa16D = new Casa('16', 'D')
const casa16F = new Casa('16', 'F')
const casa16O = new Casa('16', 'O')
const casa16P = new Casa('16', 'P')
const casa16Q = new Casa('16', 'Q')
const casa17D = new Casa('17', 'D')
const casa17F = new Casa('17', 'F')
const casa17O = new Casa('17', 'O')
const casa17P = new Casa('17', 'P')
const casa17Q = new Casa('17', 'Q')
const casa18D = new Casa('18', 'D')

const casasPergunta1 = [
    new Casa('1', 'B'),
    new Casa('1', 'C'),
    new Casa('1', 'D'),
    new Casa('1', 'E'),
    new Casa('1', 'F'),
    new Casa('1', 'G'),
    new Casa('1', 'H'),
    new Casa('1', 'I'),
]
const casasPergunta2 = [
    new Casa('2', 'J'),
    casa3J,
    casa4J,
    new Casa('5', 'J'),
    casa6J,
    casa7J,
]
const casasPergunta3 = [
    new Casa('1', 'M'),
    new Casa('1', 'N'),
    new Casa('1', 'O'),
    casa1P,
    new Casa('1', 'Q'),
    new Casa('1', 'R'),
]
const casasPergunta4 = [
    new Casa('3', 'A'),
    new Casa('4', 'A'),
    new Casa('5', 'A'),
    new Casa('6', 'A'),
    new Casa('7', 'A'),
    new Casa('8', 'A'),
]
const casasPergunta5 = [
    new Casa('2', 'C'),
    new Casa('2', 'D'),
    new Casa('2', 'E'),
    new Casa('2', 'F'),
    new Casa('2', 'G'),
    new Casa('2', 'H'),
]
const casasPergunta6 = [
    casa3I,
    casa4I,
    new Casa('5', 'I'),
    casa6I,
    casa7I,
    casa8I,
    casa9I,
    casa10I,
    casa11I,
    casa12I,
    casa13I,
    casa14I,
]
const casasPergunta7 = [
    casa3M,
    new Casa('4', 'M'),
    new Casa('5', 'M'),
    casa6M,
    casa7M,
]
const casasPergunta8 = [
    casa3O,
    new Casa('4', 'O'),
    new Casa('5', 'O'),
    new Casa('6', 'O'),
]
const casasPergunta9 = [
    new Casa('3', 'D'),
    new Casa('3', 'E'),
    new Casa('3', 'F'),
    new Casa('3', 'G'),
    new Casa('3', 'H'),
    casa3I,
    casa3J,
    casa3K,
]
const casasPergunta10 = [
    casa3M,
    new Casa('3', 'N'),
    casa3O,
    casa3P,
    new Casa('3', 'Q'),
]
const casasPergunta11 = [
    casa4K,
    casa4J,
    casa4I,
    new Casa('4', 'H'),
    new Casa('4', 'G'),
    new Casa('4', 'F'),
]
const casasPergunta12 = [
    casa3P,
    new Casa('2', 'P'),
    casa1P,
]
const casasPergunta13 = [
    new Casa('5', 'Q'),
    new Casa('6', 'Q'),
    new Casa('7', 'Q'),
    casa8Q,
    casa9Q,
    new Casa('10', 'Q'),
    new Casa('11', 'Q'),
    new Casa('12', 'Q'),
    new Casa('13', 'Q'),
]
const casasPergunta14 = [
    new Casa('6', 'B'),
    new Casa('7', 'B'),
    new Casa('8', 'B'),
    casa9B,
    new Casa('10', 'B'),
    casa11B,
    new Casa('12', 'B'),
]
const casasPergunta15 = [
    new Casa('5', 'D'),
    new Casa('5', 'E'),
    new Casa('5', 'F'),
    new Casa('5', 'G'),
]
const casasPergunta16 = [
    new Casa('6', 'R'),
    new Casa('7', 'R'),
    casa8R,
    casa9R,
    new Casa('10', 'R'),
    new Casa('11', 'R'),
    new Casa('12', 'R'),
    new Casa('13', 'R'),
]
const casasPergunta17 = [
    new Casa('6', 'E'),
    new Casa('6', 'F'),
    new Casa('6', 'G'),
    new Casa('6', 'H'),
    casa6I,
    casa6J,
    casa6K,
    new Casa('6', 'L'),
    casa6M,
]
const casasPergunta18 = [
    new Casa('7', 'G'),
    new Casa('7', 'H'),
    casa7I,
    casa7J,
    casa7K,
    new Casa('7', 'L'),
    casa7M,
    new Casa('7', 'N'),
]    
const casasPergunta19 = [
    new Casa('8', 'E'),
    new Casa('8', 'F'),
    new Casa('8', 'G'),
    new Casa('8', 'H'),
    casa8I,
]
const casasPergunta20 = [
    casa7K,
    casa6K,
    new Casa('5', 'K'),
    casa4K,
    casa3K,
    new Casa('2', 'K'),
    new Casa('1', 'K'),
]
const casasPergunta21 = [
    casa9M,
    casa10M,
    new Casa('11', 'M'),
    casa12M,
    casa13M,
    new Casa('14', 'M'),
    casa15M,
    new Casa('16', 'M'),
]
const casasPergunta22 = [
    casa8P,   
    casa8Q,
    casa8R,
]
const casasPergunta23 = [
    casa9B,   
    casa9C,
    new Casa('9', 'D'),
    new Casa('9', 'E'),
    casa9F,
    new Casa('9', 'G'),
    new Casa('9', 'H'),
    casa9I,
]
const casasPergunta24 = [
    casa9M,   
    new Casa('9', 'N'),
    new Casa('9', 'O'),
    casa9P,
    casa9Q,
    casa9R,
]
const casasPergunta25 = [
    casa10F,   
    new Casa('10', 'G'),
    new Casa('10', 'H'),
    casa10I,
    new Casa('10', 'J'),
    new Casa('10', 'K'),
    new Casa('10', 'L'),
    casa10M,
]
const casasPergunta26 = [
    casa11I,   
    new Casa('11', 'H'),
    new Casa('11', 'G'),
    casa11F,
    new Casa('11', 'E'),
    new Casa('11', 'D'),
    casa11C,
    casa11B,
    casa11A,
]
const casasPergunta27 = [
    casa12N,
    casa13N,
    casa14N,
    casa15N,
]
const casasPergunta28 = [
    new Casa('12', 'E'),
    casa12F,   
    new Casa('12', 'G'),
    new Casa('12', 'H'),
    casa12I,
    new Casa('12', 'J'),
    new Casa('12', 'K'),
    new Casa('12', 'L'),
    casa12M,
    casa12N,
]
const casasPergunta29 = [
    new Casa('11', 'P'),
    new Casa('10', 'P'),
    casa9P,
    casa8P,
    new Casa('7', 'P'),
    new Casa('6', 'P'),
    new Casa('5', 'P'),
]
const casasPergunta30 = [
    casa13C,
    new Casa('13', 'D'),
    new Casa('13', 'E'),
    casa13F,
    new Casa('13', 'G'),
]
const casasPergunta31 = [
    casa13I,
    new Casa('13', 'J'),
    new Casa('13', 'K'),
    new Casa('13', 'L'),
    casa13M,
    casa13N,
    casa13O,
]
const casasPergunta32 = [
    new Casa('14', 'P'),
    casa15P,
    casa16P,
    casa17P,
]
const casasPergunta33 = [
    casa13C,
    new Casa('12', 'C'),
    casa11C,
    new Casa('10', 'C'),
    casa9C,
    new Casa('8', 'C'),
    new Casa('7', 'C'),
    new Casa('6', 'C'),
]
const casasPergunta34 = [
    casa15D,
    casa16D,
    casa17D,
    casa18D,
]
const casasPergunta35 = [
    casa14F,
    new Casa('14', 'G'),
    new Casa('14', 'H'),
    casa14I,
    new Casa('14', 'J'),
    new Casa('14', 'K'),
]
const casasPergunta36 = [
     new Casa('14', 'A'),
     new Casa('13', 'A'),
     new Casa('12', 'A'),
     casa11A,
     new Casa('10', 'A'),
]
const casasPergunta37 = [
    casa15F,
    new Casa('15', 'E'),
    casa15D,
    new Casa('15', 'C'),
    new Casa('15', 'B'),
]
const casasPergunta38 = [
    new Casa('15', 'K'),
    new Casa('15', 'L'),
    casa15M,
    casa15N,
    casa15O,
    casa15P,
    casa15Q,
]
const casasPergunta39 = [
    new Casa('16', 'J'),
    new Casa('16', 'I'),
    new Casa('16', 'H'),
    new Casa('16', 'G'),
    casa16F,
    new Casa('16', 'E'),
    casa16D,
    new Casa('16', 'C'),
]
const casasPergunta40 = [
    casa16O,
    casa16P,
    casa16Q,
    new Casa('16', 'R'),
]
const casasPergunta41 = [
    new Casa('17', 'C'),
    casa17D,
    new Casa('17', 'E'),
    casa17F,
    new Casa('17', 'G'),
    new Casa('17', 'H'),
    new Casa('17', 'I'),
    new Casa('17', 'J'),
]
const casasPergunta42 = [
    new Casa('17', 'N'),
    casa17O,
    casa17P,
    casa17Q,
    new Casa('17', 'R'),
]
const casasPergunta43 = [
    new Casa('18', 'B'),
    new Casa('18', 'C'),
    casa18D,
    new Casa('18', 'E'),
]
const casasPergunta44 = [
    casa17F,
    casa16F,
    casa15F,
    casa14F,
    casa13F,
    casa12F,
    casa11F,
    casa10F,
    casa9F,
]
const casasPergunta45 = [
    new Casa('18', 'H'),
    new Casa('18', 'I'),
    new Casa('18', 'J'),
    new Casa('18', 'K'),
    new Casa('18', 'L'),
    new Casa('18', 'M'),
    new Casa('18', 'N'),
]
const casasPergunta46 = [
    casa17O,
    casa16O,
    casa15O,
    casa14O,
    casa13O,
]
const casasPergunta47 = [
    casa17Q,
    casa16Q,
    casa15Q,
]

const pergunta1 = " 1. O mesmo que complicado, difícil de explicar:"
const pergunta2 = " 2. Uma das línguas mais faladas no mundo:"
const pergunta3 = " 3. Conceito proposto que não pode ser provado, mas que é aceito como lógico. Como por exemplo, Deus, o infinito, a eternidade."
const pergunta4 = " 4. Além de Josué, foi o único, dentre aqueles que peregrinaram no deserto, que entrou na terra prometida (Números 32:11-12):"
const pergunta5 = " 5. Assim como errado é oposto ao certo e a ilusão é oposta à realidade; aquilo que é oposto à verdade é: (Vide 2 Tessalonicenses 2:10)"
const pergunta6 = " 6. Material encontrado (através de escavações, ou não) em determinados locais, e que são considerados como restos de antigas civilizações. Este material é chamado de achado ..."
const pergunta7 = " 7. Homem que atirou pedras no rei Davi quando ele fugia de Absalão (2Samuel 16:5-14)"
const pergunta8 = " 8. Jesus é chamado: O ... da tribo de Judá (Apocalipse 5:5)"
const pergunta9 = " 9. Teoria científica que tenta explicar a origem do universo a partir de uma grande explosão cósmica."
const pergunta10 = " 10. Companheiro de Paulo em suas viagens missionárias (Atos capítulo 16)"
const pergunta11 = " 11. Esta palavra vem do grego e significa, ao pé da letra, 'chamados para fora' (Efésios 5:32)"
const pergunta12 = " 12. O mesmo que tutor. Palavra grega que quer dizer, literalmente, 'pessoa que conduz uma criança'. Na época de Paulo, foram servos responsáveis pela proteção dos filhos de seus senhores. (Gálatas 3:24)"
const pergunta13 = " 13. Aluno ou aprendiz, que recebe instrução prática diretamente de seu mestre (João 9:28): "
const pergunta14 = " 14. Uma afirmação que pode ser provada, isto é, demostrada na prática e pela lógica:"
const pergunta15 = " 15. Esposa de Abraão e mãe de Isaque:"
const pergunta16 = " 16. A teoria da ... das espécies, que tem como principal articulador o naturalista britânico Charles Darwin.:"
const pergunta17 = " 17. Qualidade de uma pessoa ou algo que exerce algum tipo de domínio ou impacto em outro. Pessoa que é considerada pela mídia como 'formador de opinião'"
const pergunta18 = " 18. Prisão, cárcere, cadeia, penitenciária:"
const pergunta19 = " 19. O nome de um dos três principais apóstolos de Jesus, e que teve seu nome mudado para Pedro (Marcos 3:16)"
const pergunta20 = " 20. Termo em inglês que, traduzido pode ter vários significados relacionados: um estalo de informação, uma ideia, uma clareza súbita na mente, resultando em entender a natureza interior das coisas, como por exemplo, verdades espirituais:"
const pergunta21 = " 21. CS Lewis, na sua juventude, era um ateu ... Palavra que significa: aquele que se convenceu de alguma coisa, aquele que não tem mais dúvidas sobre determinado assunto:"
const pergunta22 = " 22. Sem conteúdo interno; vazio, que não tem miolo, vazado. Que não tem a substância interna."
const pergunta23 = " 23. De acordo com a lógica e a inteligência do pensamento. Oposto à loucura e a ignorância. 1Pedro 2:2 fala que devemos desejar o leite ... não falsificado."
const pergunta24 = " 24. O contrário daquilo que é inacreditável. O contrário de incrível:"
const pergunta25 = " 25. Diz respeito a alguém que é organizado e que gosta de cumprir regras e fazer as coisas com planejamento."
const pergunta26 = " 26. Comida deliciosa que normalmente tem muita açucar ou gordura."
const pergunta27 = " 27. Folga, tempo no qual se fica inativo e se dá ao descanso ou lazer. Segundo Ezequiel 16:49, esse foi um dos pecados dos habitantes da cidade de Sodoma:"
const pergunta28 = " 28. Que diz respeito ao instinto, ou seja, aquilo que é natural de um ser animal, e que o leva a agir inconscientemente, sem depender da razão: (Efésios 2:3)"
const pergunta29 = " 29. Porque todo aquele que ... o nome do Senhor será salvo. (Romanos 10:13):"
const pergunta30 = " 30. Estes seres celestiais virão no fim do mundo e separarão os maus de entre os justos e os lançarão na fornalha de fogo ardente (Mateus 13:49-50):"
const pergunta31 = " 31. Relativo ao cosmos, palavra grega que literalmente significa 'ornamentado',contrário ao que é feio e desordenado; da onde vem a palavra cosmético. Relativo ao mundo, compreendendo todo o espaço sideral, o universo."
const pergunta32 = " 32. No final da última ceia, Jesus e seus discípulos, antes de sairem para o monte das Oliveiras, cantaram um .... (Mateus 26:30):"
const pergunta33 = " 33. Foi a última esposa de Davi e casou-se com ele quando já era velho. (1Reis 3:1-3)"
const pergunta34 = " 34. Aquele que não acredita em Deus é chamado:"
const pergunta35 = " 35. Aquilo que está longe, ou que é feito a distância (no feminino). Terra ... Lucas 19:12:"
const pergunta36 = " 36. Local próprio para oferecer sacrifícios e ofertas a Deus. Segundo Êxodo 20:24-26 deveria ser feito de terra ou de pedras brutas."
const pergunta37 = " 37. Nome de um dos discípulos de Jesus que estavam com Pedro e João num barquinho no mar da Galileia"
const pergunta38 = " 38. Aquilo que não é segredo. Atos 4:16: todos os que moram em Jerusalém sabem que eles realizaram um milagre .... que não podemos negar.(NO FEMININO)"
const pergunta39 = " 39. Quanto ao bom ..., guarde-o por meio do Espírito Santo que habita em nós. (2 Timóteo 1:14)"
const pergunta40 = " 40. Uma das pedras preciosas que compunha o éfode do sumo sacerdote. (Êxodo 25:7)"
const pergunta41 = " 41. Contrário de absoluto:"
const pergunta42 = " 42. Nome de um pregador eloquente, judeu, natural de Alexandria. (Atos 18:24)"
const pergunta43 = " 43. Nome do primeiro rei de Israel (1 Samuel 9:17)"
const pergunta44 = " 44. Pessoa que trabalha na área de astronomia (Ciência que estuda a posição, os movimentos e a constituição dos corpos celestes)."
const pergunta45 = " 45. Enquanto era apedrejavado, orou: 'Senhor Jesus, recebe o meu espírito'. (Atos 7:59)"
const pergunta46 = " 46. É um animal impuro, pois não rumina, apesar de ter as unhas fendidas (Levítico 11:7)"
const pergunta47 = " 47. Nome da primeira esposa de Jacó (Gênesis 29:16)"

const listaDePalavras = [
    new PalavraBuilder()
        .comAsCasas(casasPergunta1)
        .comAPalavraCerta('COMPLEXO')
        .comAPergunta(pergunta1)
        .comONumeroBotao(1)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta2)
        .comAPalavraCerta('INGLES')
        .comAPergunta(pergunta2)
        .comONumeroBotao(2)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta3)
        .comAPalavraCerta('AXIOMA')
        .comAPergunta(pergunta3)
        .comONumeroBotao(3)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta4)
        .comAPalavraCerta('CALEBE')
        .comAPergunta(pergunta4)
        .comONumeroBotao(4)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta5)
        .comAPalavraCerta('ENGANO')
        .comAPergunta(pergunta5)
        .comONumeroBotao(5)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta6)
        .comAPalavraCerta('ARQUEOLOGICO')
        .comAPergunta(pergunta6)
        .comONumeroBotao(6)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta7)
        .comAPalavraCerta('SIMEI')
        .comAPergunta(pergunta7)
        .comONumeroBotao(7)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta8)
        .comAPalavraCerta('LEAO')
        .comAPergunta(pergunta8)
        .comONumeroBotao(8)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta9)
        .comAPalavraCerta('BIG BANG')
        .comAPergunta(pergunta9)
        .comONumeroBotao(9)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta10)
        .comAPalavraCerta('SILAS')
        .comAPergunta(pergunta10)
        .comONumeroBotao(10)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta11)
        .comAPalavraCerta('IGREJA')
        .comAPergunta(pergunta11)
        .comONumeroBotao(11)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),    
    new PalavraBuilder()
        .comAsCasas(casasPergunta12)
        .comAPalavraCerta('AIO')
        .comAPergunta(pergunta12)
        .comONumeroBotao(12)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta13)
        .comAPalavraCerta('DISCIPULO')
        .comAPergunta(pergunta13)
        .comONumeroBotao(13)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta14)
        .comAPalavraCerta('TEOREMA')
        .comAPergunta(pergunta14)
        .comONumeroBotao(14)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta15)
        .comAPalavraCerta('SARA')
        .comAPergunta(pergunta15)
        .comONumeroBotao(15)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta16)
        .comAPalavraCerta('EVOLUÇAO')
        .comAPergunta(pergunta16)
        .comONumeroBotao(16)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta17)
        .comAPalavraCerta('INFLUENTE')
        .comAPergunta(pergunta17)
        .comONumeroBotao(17)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta18)
        .comAPalavraCerta('PRESIDIO')
        .comAPergunta(pergunta18)
        .comONumeroBotao(18)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta19)
        .comAPalavraCerta('SIMAO')
        .comAPergunta(pergunta19)
        .comONumeroBotao(19)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta20)
        .comAPalavraCerta('INSIGHT')
        .comAPergunta(pergunta20)
        .comONumeroBotao(20)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta21)
        .comAPalavraCerta('CONVICTO')
        .comAPergunta(pergunta21)
        .comONumeroBotao(21)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta22)
        .comAPalavraCerta('OCO')
        .comAPergunta(pergunta22)
        .comONumeroBotao(22)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta23)
        .comAPalavraCerta('RACIONAL')
        .comAPergunta(pergunta23)
        .comONumeroBotao(23)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta24)
        .comAPalavraCerta('CRIVIL')
        .comAPergunta(pergunta24)
        .comONumeroBotao(24)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta25)
        .comAPalavraCerta('METODICO')
        .comAPergunta(pergunta25)
        .comONumeroBotao(25)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta26)
        .comAPalavraCerta('GULOSEIMA')
        .comAPergunta(pergunta26)
        .comONumeroBotao(26)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta27)
        .comAPalavraCerta('OCIO')
        .comAPergunta(pergunta27)
        .comONumeroBotao(27)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta28)
        .comAPalavraCerta('INSTINTIVO')
        .comAPergunta(pergunta28)
        .comONumeroBotao(28)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta29)
        .comAPalavraCerta('INVOCAR')
        .comAPergunta(pergunta29)
        .comONumeroBotao(29)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta30)
        .comAPalavraCerta('ANJOS')
        .comAPergunta(pergunta30)
        .comONumeroBotao(30)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta31)
        .comAPalavraCerta('COSMICO')
        .comAPergunta(pergunta31)
        .comONumeroBotao(31)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta32)
        .comAPalavraCerta('HINO')
        .comAPergunta(pergunta32)
        .comONumeroBotao(32)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta33)
        .comAPalavraCerta('ABISAQUE')
        .comAPergunta(pergunta33)
        .comONumeroBotao(33)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta34)
        .comAPalavraCerta('ATEU')
        .comAPergunta(pergunta34)
        .comONumeroBotao(34)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta35)
        .comAPalavraCerta('REMOTA')
        .comAPergunta(pergunta35)
        .comONumeroBotao(35)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta36)
        .comAPalavraCerta('ALTAR')
        .comAPergunta(pergunta36)
        .comONumeroBotao(36)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta37)
        .comAPalavraCerta('TIAGO')
        .comAPergunta(pergunta37)
        .comONumeroBotao(37)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta38)
        .comAPalavraCerta('NOTORIA')
        .comAPergunta(pergunta38)
        .comONumeroBotao(38)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta39)
        .comAPalavraCerta('DEPOSITO')
        .comAPergunta(pergunta39)
        .comONumeroBotao(39)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta40)
        .comAPalavraCerta('ONIX')
        .comAPergunta(pergunta40)
        .comONumeroBotao(40)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta41)
        .comAPalavraCerta('RELATIVO')
        .comAPergunta(pergunta41)
        .comONumeroBotao(41)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta42)
        .comAPalavraCerta('APOLO')
        .comAPergunta(pergunta42)
        .comONumeroBotao(42)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta43)
        .comAPalavraCerta('SAUL')
        .comAPergunta(pergunta43)
        .comONumeroBotao(43)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta44)
        .comAPalavraCerta('ASTRONOMO')
        .comAPergunta(pergunta44)
        .comONumeroBotao(44)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta45)
        .comAPalavraCerta('ESTEVAO')
        .comAPergunta(pergunta45)
        .comONumeroBotao(45)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta46)
        .comAPalavraCerta('PORCO')
        .comAPergunta(pergunta46)
        .comONumeroBotao(46)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasPergunta47)
        .comAPalavraCerta('LIA')
        .comAPergunta(pergunta47)
        .comONumeroBotao(47)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
]
new JogoPalavraCruzada(listaDePalavras, cronometro, score)