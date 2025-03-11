// class Hamburguer {
//     constructor(pao, carne, queijo, molho, salada){
//         this.pao = pao;
//         this.carne = carne;
//         this.queijo = queijo;
//         this.molho = molho;
//         this.salada = salada;
//     }
//     getBurguer () {
//         console.log(`Hambuer feito com pao ${this.pao}, carne ${this.carne}, queijo ${this.queijo}, molho ${this.molho}, ${this.salada? 'salada' : 'sem salada'}`)
//     }

// }
// const burguer = new Hamburguer('trigo', 'patinho', 'mussarela', 'barbecue')
// burguer.getBurguer()

class HamburguerBuilder {
    constructor() {
        this.pao = 'trigo';
        this.carne = 'picanha';
        this.queijo = 'mussarela';
        this.salada = false
        this.molho = 'maionese caseira'
    }
    setPao(pao) {
        this.pao = pao
        return this
    }
    setCarne(carne) {
        this.carne = carne
        return this
    }
    setQueijo(queijo) {
        this.queijo = queijo
        return this
    }
    setMolho(molho) {
        this.molho = molho
        return this
    }
    addSalada() {
        this.salada = true
        return this
    }
    build() {
        return new HamburguerBuilder(this.pao, this.carne, this.queijo, this.molho, this.salada)
    }
    getBurguer() {
        console.log(`Hamburguer feito com pao ${this.pao}, carne ${this.carne}, queijo ${this.queijo}, molho ${this.molho}, ${this.salada ? 'salada' : 'sem salada'}`)
    }
}

const hamburguer = new HamburguerBuilder()
hamburguer.setCarne('frango').setQueijo('suiço').build().getBurguer()