/*
Map serve para transformar um array em outro
primeiro array é tratado é gera o segund array com os dados tratados.
*/


const numeros = [1,2,3,4,5]


let resultado = numeros.map(function(elemento){
  return elemento * 2
})


console.log(resultado)

const soma =  elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = numeros.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)
