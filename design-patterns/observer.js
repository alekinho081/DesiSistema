class SistemaDeNotificacao  {
    #observadores
    constructor(){
        this.#observadores = []
    }
    addObservador(observador){
        this.#observadores.push(observador)
    }
    removerObservador(observador){
        //adiconar filter a lista de observadores
        this.#observadores = this.#observadores.filter((item)=> item.nome != observador.nome)

    }
    notificacao(dados){
        this.#observadores.forEach(observador => observador.update(dados))
    }
}

class Observador {
    constructor(nome,){
        this.nome = nome;
    }
    update(mensagem){
        console.log(`O usuario ${this.nome} recebeu a notificacao: ${mensagem}`)
    }
}

const sistema_notificacao = new SistemaDeNotificacao()
const usuario1 = new Observador('Ramon')
const usuario2 = new Observador('Matheus')
const usuario3 = new Observador('Alex')

sistema_notificacao.addObservador(usuario1)
sistema_notificacao.addObservador(usuario2)
sistema_notificacao.notificacao('Oi')
sistema_notificacao.removerObservador(usuario1)
sistema_notificacao.addObservador(usuario3)
sistema_notificacao.notificacao('Oai')