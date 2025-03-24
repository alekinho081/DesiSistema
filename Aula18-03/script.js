/* Exercício 1
Exercício de Transformação Simples
Dado um array de números, use o método map para criar um novo array onde cada número é multiplicado por 3.
Entrada: [1, 2, 3, 4, 5]
Saída Esperada: [3, 6, 9, 12, 15]
*/

function multiplicaArray(){
    const numsArray = [1, 2, 3 , 4 ,5]
    const numsMap = numsArray.map((e) => e * 3)
    return numsMap
}
console.log(multiplicaArray())

/*  Exercicio 2
Exercício de Conversão de Tipos
Dado um array de números, use o método map para criar um novo array onde cada número é convertido para uma string.
Entrada: [1, 2, 3, 4, 5]
Saída Esperada: ["1", "2", "3", "4", "5"]
*/

function arrayParaString(){
    const numsArray = [1,2,3,4,5]
    const nunsMapString = numsArray.map((e) => e.toString())
    return nunsMapString
}
console.log(arrayParaString())

/* Exercicio 3
Exercício de Manipulação de Strings
Dado um array de strings, use o método map para criar um novo array onde cada string é convertida para maiúsculas.
Entrada: ["maçã", "banana", "laranja"]
Saída Esperada: ["MAÇÃ", "BANANA", "LARANJA"]
*/

function stringToMaiscula(){
    const frutasArray = ['maçã', 'banana', 'laranja']
    const frutasMaisculas = frutasArray.map((e) => e.toUpperCase())
    return frutasMaisculas
}
console.log(stringToMaiscula())

/* Exercicio 4
Exercício de Extração de Propriedades
Dado um array de objetos representando pessoas, use o método map para criar um novo array contendo apenas os nomes das pessoas.
Entrada: [{ nome: "Alice", idade: 25 }, { nome: "Bob", idade: 30 }, { nome: "Charlie", idade: 35 }]
Saída Esperada: ["Alice", "Bob", "Charlie"]
*/

function objetosNome(){
    const pessoas = [{nome: "Alice", idade: 25}, {nome: "Bob", idade: 30}, {nome: "Charlie", idade: 35}]
    const pessoasNome = pessoas.map((e) => e.nome)
    return pessoasNome
}
console.log(objetosNome())

/* Exercicio 5
Exercício de Cálculo Composto
Dado um array de números, use o método map para criar um novo array onde cada número é elevado ao quadrado.
Entrada: [1, 2, 3, 4, 5]
Saída Esperada: [1, 4, 9, 16, 25]
*/

function arrayNumeros(){
    const nums = [1, 2, 3, 4, 5]
    const numsElevado = nums.map((e) => e * e)
    return numsElevado
}
console.log(arrayNumeros())

/* Exercicio 6
Exercício de Mutabilidade
Crie um array chamado meuArray com os valores [1, 2, 3].
Altere o primeiro elemento do array para 4 e imprima o array no console.
Crie uma string chamada minhaString com o valor "Olá".
Tente alterar o primeiro caractere da string para "o" e imprima a string no console. O que acontece? Explique.
*/

function arrayMeu(){
    let meuArray = [1, 2, 3]
    meuArray[0] = 4
    console.log(meuArray)
    let minhaString = "Olá"
    minhaString[0] = 'o'
    // O valor da string não muda, porque em javascript é impossível mudar uma parte de uma string, 
    // só é possível mudar a string por inteiro
    console.log(minhaString)
}


arrayMeu()

// Exercicio 7 Exercicio 7 - exercício teórico, resposta no documento de texto

/* Exercicio 8
Exercício de Tipos de Dados
Declare uma variável primitivo do tipo string com o valor "Olá".
Declare uma variável referencia que contenha um objeto com uma propriedade saudacao com o valor "Olá".
Imprima os valores de primitivo e referencia.saudacao no console.
*/

function imprimeSaudacao(){
    let oi = 'Olá'
    let saudando = { saudacao: "Olá" }
    console.log(oi)
    console.log(saudando.saudacao)
}
imprimeSaudacao()

/* Exercicio 9
Exercício de Estrutura de Dados
Crie um array unidimensional chamado arraySimples com os valores [1, 2, 3].
Crie um array multidimensional chamado arrayMulti com os valores [[1, 2], [3, 4]].
Imprima ambos os arrays no console.
*/

function arraysDimens(){
    const arraySimples = [1, 2, 3]
    const arrayMulti = [[1, 2], [3, 4]]
    console.log(arraySimples)
    console.log(arrayMulti)
}

arraysDimens()

// Os exercícios 10, 11, 12, 13 estão respectivamente repetindo os exercícios 6, 7, 8, 9 

/* Parte 2 - Desafio
Desafio de Mapeamento Complexo
Dado um array de objetos representando produtos, use o método map para criar um novo array contendo apenas os preços dos produtos com desconto aplicado de 10%.
Entrada: [{ nome: "Produto 1", preco: 100 }, { nome: "Produto 2", preco: 200 }, { nome: "Produto 3", preco: 300 }]
Saída Esperada: [90, 180, 270]
*/

function mapComplex(){
    const produtos = [{ nome: "Produto 1", preco: 100 }, { nome: "Produto 2", preco: 200 }, { nome: "Produto 3", preco: 300 }]
    const produtosDescont = produtos.map((e) => e.preco - (e.preco * 0.10))
    console.log(produtosDescont)
}
mapComplex()