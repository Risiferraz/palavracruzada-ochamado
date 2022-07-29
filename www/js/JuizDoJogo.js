class JuizDoJogo {
    constructor(cronometro, pontuacao) {
        this.pontuacao = pontuacao
        this.cronometro = cronometro
    }
    pegaPontuacaoFinal() {
        if (this.cronometro.isMenorTrinta()) {
            return this.pontuacao *= 10
        }
        if (this.cronometro.isDeTrintaAQuarenta()) {
            return this.pontuacao *= 5
        }
        if (this.cronometro.isDeQuarentaACinquenta()) {
            return this.pontuacao *= 2
        }
        return this.pontuacao
    }
}
