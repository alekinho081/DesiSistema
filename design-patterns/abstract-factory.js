class Teclado {
    constructor(padrao){
        this.padrao = padrao
    }
    layout(){
        throw new Error('Função não existe ou precisa ser implementada')
    }
    print(){
        console.log('Tela printada')
    }
    ativaNumLock(){
        console.log('NumLock ativado')
    }
    desativaNumLock(){
        console.log('NumLock desativado')
    }
}
class TecladoWindows extends Teclado {
    constructor(padrao){
        super(padrao)
        this.padrao = 'Windows'
    }
    layout(){
        console.log('Layout do teclado para Windows')
    }
}
class TecladoMac extends Teclado {
    constructor(padrao){
        super(padrao)
        this.padrao = 'Mac'
    }
    layout(){
        console.log('Layout do teclado para Mac')
    }
}
class FactoryTeclado{
    criarTeclado(){
        throw new Error('Método criarTeclado() precisa ser implementado')
    }
}
class FactoryTecladoWindows extends FactoryTeclado{
    criarTeclado(){
        return new TecladoWindows()
    }
}
class FactoryTecladoMac extends FactoryTeclado{
    criarTeclado(){
        return new TecladoMac()
    }
}
function montarTeclado(factory){
    const teclado = factory.criarTeclado()

    console.log('Criando teclado para o sistema operacional', teclado.padrao)
    return teclado
}
const tipoTeclado = 'Mac'
const factori = tipoTeclado === "Windows" ? new FactoryTecladoWindows : new FactoryTecladoMac
const teclado1 = montarTeclado(factori)
teclado1.layout()