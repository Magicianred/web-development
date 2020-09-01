/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A
função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

const retornaMod = function(dividendo, divisor){
  const divisao = (dividendo/divisor)
  const mod = divisao % divisor
  return console.log(`Resultado divisão: ${divisao}, resto divisao: ${mod}`)
}



retornaMod(100, 2)
