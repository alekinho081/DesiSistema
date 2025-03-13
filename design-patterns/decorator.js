class Jogador {
    atacar(){
        return 'Atacou'
    }
}

class EspadaDecorator{
    constructor(jogador){
        this.jogador = jogador
    }
    atacar(){
        return this.jogador.atacar() + ' Com uma espada'
    }
}

const jogador1 = new Jogador()
jogador1.atacar()
const jogadorComEspada = new EspadaDecorator(jogador1)
console.log(jogadorComEspada.atacar())