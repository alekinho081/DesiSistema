class ModoDeJogo {
    itensRaros(){
        return 'aqui é só dados confidenciais'
    }
}

class ProxyModoDeJogo{
    constructor(nome,tipo){
        this.nome = nome
        this.tipo = tipo
        this.modo_jogo = new ModoDeJogo()
    }
    acessarDados(){
        if(this.tipo != 'admin'){
            return 'Acesso negado! Sem permissão'
        }else if (this.tipo === 'admin'){
            return this.modo_jogo.itensRaros()
        }
    }
}

const jogador1 = new ProxyModoDeJogo('alex', 'admin')
console.log(jogador1.acessarDados())