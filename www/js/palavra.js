class Palavra {
    jogoPalavraCruzada = null
    constructor(casas, palavraCerta, pergunta, numeroBotao, orientacao) {
        this.botao = document.getElementById(`botao-pergunta${numeroBotao}`);
        this.orientacao = orientacao;
        this.casas = casas;
        this.palavraCerta = palavraCerta;
        this.pergunta = pergunta;
        this.casas.forEach(c => c.palavra[this.orientacao] =this);
        this.botao.addEventListener('click', () => this.acoesQuandoClicarNoBotao())
    }
    isCorreta() {
        const palavraEscrita = this.casas.map(c => c.valor).join("");//map transforma a cas na letra que ela recebe
        return palavraEscrita.toUpperCase() == this.palavraCerta.toUpperCase();
    }
    realizeAcoesAoTerminarAPalavra() {
        if (this.isCorreta()) {
            this.realizaAcoesParaPalavraCorreta()
        } else {
            this.realizaAcoesParaPalavraErrada()
        }
    }
    realizaAcoesParaPalavraErrada(){
        this.casas.forEach(c => c.marcaPalavraErrada())
        setTimeout(() => {
            this.casas.forEach(c => c.resetaCasa())
            this.colocaFocoNaCasaComIndice(0)
        }, 1000)
        this.jogoPalavraCruzada.reduzPontuacao()
    }
    realizaAcoesParaPalavraCorreta(){
        this.casas.forEach(c => c.marcaPalavraCerta())
        this.jogoPalavraCruzada.realizaAcoesAoAcertarPalavra()  
    }
    mostraCasa() {
        // this.casas.forEach(c => {
        //     console.log(c.elemento)
        // }) - não precisa mais de uma função para mostrar se a plavara estava selecionando as casas certas
    }
    temProximaCasa(indice) {
        return !!this.casas[indice]
    }
    vaiParaProxima(casaAtual) {
        const indice = this.pegaIndiceDaProximaCasa(casaAtual)
        if (this.temProximaCasa(indice)) {
            this.colocaFocoNaCasaComIndice(indice)

        } else {
            this.realizeAcoesAoTerminarAPalavra()
        }
    }
    vaiParaCasaAnterior(casaAtual) {
        const indice = this.pegaIndiceDaCasaAnterior(casaAtual)
        this.colocaFocoNaCasaComIndice(indice)
    }
    pegaIndiceDaCasaAnterior(casaAtual) {
        return this.casas.indexOf(casaAtual) - 1;
    }
    pegaIndiceDaProximaCasa(casaAtual) {
        return this.casas.indexOf(casaAtual) + 1
    }
    colocaFocoNaCasaComIndice(indice) {
        this.casas[indice].colocaFocoNoElemento()
    }
    identifiqueAPalavraSelecionada() {
        this.jogoPalavraCruzada.tiraOFocoDeTodasAsPalavras()
        this.jogoPalavraCruzada.setaPerguntaSelecionada(this)
        document.getElementById('pergunta-da-vez').textContent = this.pergunta;
        this.casas.forEach(casa => casa.marcaPalavraSelecionada())
        this.casas.forEach(casa => casa.orientacaoDaVez=this.orientacao)
    }
    acoesQuandoClicarNoBotao() {
        this.identifiqueAPalavraSelecionada()
        this.colocaFocoNaCasaComIndice(0)
        this.jogoPalavraCruzada.acoesQuandoSelecionaUmaPergunta(this.orientacao)
    }
    tiraFocoDaPalavra() {
        this.casas.forEach(c => c.tiraFocoDaCasa())
    }
    respondePalavra(){
        this.casas.forEach(c => c.apareceResposta())
        for(let indice=0; indice<this.casas.length;indice++) {//indice é o mesmo de posição = i
            const resposta = this.palavraCerta.charAt(indice)
            this.casas[indice].apareceResposta(resposta)
        }
        this.realizeAcoesAoTerminarAPalavra()
    }
    daDica() {
        this.casas.forEach(c => c.resetaCasa())
        this.preencheDicasDeAcordoComQuantidadeDeCasasDaPalavra()
        this.colocaFocaNaPrimeiraCasaNaoPreenchida()
    }
    preencheDicasDeAcordoComQuantidadeDeCasasDaPalavra() {
        const quantidadeDeCasasParaPreencher = this.pegaQuantidadeDeCasasQueSeraoPreenchidasDaDica()
        for (let indice = 0; indice < quantidadeDeCasasParaPreencher; indice++) {
            this.colocaDicaNaCasa()
        }
    }
    pegaQuantidadeDeCasasQueSeraoPreenchidasDaDica() {
        const totalDeCasasVazias = this.casas.filter(c => !c.valor).length
        const percentual = totalDeCasasVazias * 0.34
        return Math.ceil(percentual)
    }
    colocaDicaNaCasa() {
        const total = this.casas.length//tamanho = quantidade
        const indiceSorteado = Math.floor(Math.random() * total)
        if (!this.casas[indiceSorteado].valor) {
            const resposta = this.palavraCerta.charAt(indiceSorteado)
            this.casas[indiceSorteado].apareceResposta(resposta)
        } else {
            this.colocaDicaNaCasa()
        }
    }
    colocaFocaNaPrimeiraCasaNaoPreenchida() {
        this.casas[0].colocaFocoNoElemento()
    }
}
