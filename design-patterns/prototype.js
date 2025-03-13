class Usuario {
    constructor(nome, tipo, permissoes){
        this.nome = nome
        this.tipo = tipo
        this.permissoes = [permissoes]
    }
    clonar(){
        return new Usuario(this.nome, this.tipo, this.permissoes)
    }
    exibir(){
        console.log(`Usuário: ${this.nome}, Tipo: ${this.tipo}, Permissões: ${this.permissoes}`)
    }
}

const usuario_base = new Usuario('Base', 'Admin',['Editar', 'Excluir', 'Banir', 'Visualizar'])

let usuario_comum = usuario_base.clonar()
usuario_comum.nome = 'Cleiton'
usuario_comum.tipo = 'Usuário Comum'
usuario_comum.permissoes = ['Visualizar']
usuario_comum.exibir()

