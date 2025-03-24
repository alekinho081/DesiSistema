/*
Manipulação de Strings 
Declare uma variável texto com o valor "Aprendendo JavaScript é divertido e recompensador!".
Converta o valor de texto para maiúsculas e exiba no console.
Verifique se texto contém a palavra "divertido" e exiba o resultado no console.
Divida texto em um array de palavras e exiba o array resultante no console.
Junte as palavras do array resultante em uma única string, separadas por hífens, e exiba o resultado no console.
*/
function aprendendoJs(){
    let txt = "Aprendendo JavaScript é divertido e recompensador!"
    txt = txt.toUpperCase()
    let newTxt = ''
    console.log(txt)
    if(txt.indexOf('DIVERTIDO') != -1){
        console.log(txt.indexOf('DIVERTIDO'))
    }
    let arrayTxt = []
    arrayTxt = txt.split(' ')
    console.log(arrayTxt)
    arrayTxt.forEach((e) => newTxt += e +'-')
    console.log(newTxt)
}
aprendendoJs()


/*Operações com Números
Declare uma variável num1 com o valor 200.456 e outra num2 com o valor 150.789.
Arredonde num1 para o valor inteiro mais próximo e exiba no console.
Encontre o valor máximo e mínimo entre num1 e num2 usando Math.max e Math.min, respectivamente, e exiba no console.
Calcule a raiz quadrada de num2 e exiba no console.
Converta num1 para uma string com notação científica (ex.: 2.00456e+2) e exiba no console.
*/
function operacaoNumero(){
    let num1 = 200.456, num2 = 150.789
    let x = Math.round(num1)
    console.log(x)
    console.log(Math.max(num1, num2))
    console.log(Math.min(num1, num2))
    console.log(Math.sqrt(num2))
    console.log(num1.toExponential().toString())
}
operacaoNumero()

/*Trabalhando com Null, Undefined, e NaN
Declare uma variável nulo e atribua a ela o valor null.
Verifique se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===). Exiba os resultados no console.
Declare uma variável indefinido sem atribuir nenhum valor.
Verifique se indefinido é NaN usando a função isNaN e exiba o resultado no console.
Declare uma variável numStr2 com o valor "123abc" (string) e tente convertê-la para um número. Verifique se o resultado é NaN e exiba o resultado no console.
*/

function trabNull(){
    let nulo = null
    console.log(nulo == undefined)
    console.log(nulo === undefined)
    let indefinido
    console.log(isNaN(indefinido))
    let numStr2 = "123abc"
    console.log(isNaN(parseInt(numStr2)))
}
trabNull()

/*Manipulação de Arrays
Declare um array numeros com os valores [10, 20, 30, 40, 50].
Use o método push para adicionar o valor 60 ao final do array e exiba o array atualizado no console.
Use o método pop para remover o último valor do array e exiba o valor removido e o array atualizado no console.
Use o método splice para remover o terceiro elemento do array (número 30) e exiba o array atualizado no console.
Ordene o array em ordem decrescente e exiba o resultado no console.
*/

function arrayManip(){
    let numeros = [10,20,30,40,50]
    numeros.push(60)
    console.log(numeros)
    numeros.pop()
    console.log(numeros)
    numeros.splice(2,1)
    console.log(numeros)
    numeros.sort().reverse()
    console.log(numeros)
}
arrayManip()

/*Manipulação de Objetos Avançada
Crie um objeto pessoa com as propriedades nome, idade, profissao, e endereco (onde endereco é um objeto com rua, cidade, e estado).
Adicione um método apresentacao ao objeto pessoa que retorne uma string com uma breve apresentação da pessoa.
Acesse e exiba o valor da propriedade cidade do endereco no console.
Atualize a propriedade profissao para um novo valor e exiba o objeto atualizado no console.
Adicione uma nova propriedade telefone ao objeto pessoa e exiba o objeto atualizado no console.
*/

function objetoManip(){
    let pessoa = {nome: 'alex', idade: 17, profissao: "nenhuma", endereco: { rua: 'Jailton', cidade: 'Palhoça', estado: 'SC'}}
    function apresentarPessoa(pessoa){
        return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, atualmente estou morando na cidade ${pessoa.endereco.cidade}`
    }
    console.log(apresentarPessoa(pessoa))
    pessoa.profissao = 'Programador junior'
    console.log(pessoa.profissao)
    Object.assign(pessoa, {telefone: 48996476451})
    console.log(pessoa)
}
objetoManip()

/*Funções e Escopo
Declare uma função soma que aceite dois parâmetros e retorne a soma deles.
Declare uma função ehPar que receba um número como parâmetro e retorne true se o número for par, ou false se for ímpar.
Declare uma função dobraValores que receba um array de números e retorne um novo array com cada valor dobrado.
Crie uma função contaCaracteres que receba uma string e retorne o número de caracteres na string.
Declare uma função fatorial que calcule o fatorial de um número (ex.: fatorial de 5 é 5*4*3*2*1 = 120).
*/
function soma(a, b){
    return a+b
}
console.log(soma(1,2))
function ehPar(a){
    return a % 2 == 0
}
console.log(ehPar(2))
function dobraValores(array){
    return array.map((e) => e * 2)
}
console.log(dobraValores([2,4,6,8]))

/*Manipulação de Datas e Horas
Crie uma data representando o seu próximo aniversário.
Crie uma data representando a data atual.
Calcule a diferença em dias entre a data atual e o seu próximo aniversário e exiba o resultado no console.
Formate a data atual no formato "YYYY-MM-DD" e exiba no console.
Adicione 30 dias à data atual e exiba a nova data no console.
*/

//SEM IDEIA DE COMO FAZER ESSA
function dataManip(){
  const aniver = new Date(2025, 8, 15)
  const hoje = new Date()
}

dataManip()