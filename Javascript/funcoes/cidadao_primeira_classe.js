/* First Class Object (Citizens)
 Higher Order function
*/


// Forma literal

function criarDesenhos(){}

// Armazenar em uma variável

const patinar = function(){}

// Armazenar em um  array

const trem = [function(vagoes, trilhos){return vagoes + trilhos}, criarDesenhos, patinar]
console.log(trem[0](3, 2)) // acessa os itens pelo indice no array

// Armazenar em atributo do objeto

const objeto = {}
objeto.mergulhar = function(){return '\\_o...'}
console.log(objeto.mergulhar())


// passar funcao como parametro

function executarFuncao(funcao){
  funcao()
}

executarFuncao(function (){ console.log("executando uma função dentro de outra")})


// funções podem conter outras funções dentro
function soma(a, b){
  return function (c){
    console.log(a + b + c)
  }
}


soma(10, 20)(51)
const juntaSomas = soma(25, 39)
juntaSomas(27)
