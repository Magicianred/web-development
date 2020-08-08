/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const calculaJurosSimples = function(capital_inicial, juros, tempo){
  return (capital_inicial * juros * tempo)
}

const calculaJurosComposto = function(capital_inicial,juros, tempo){
  return (capital_inicial *((1 + juros)**tempo)).toFixed(2)
}

console.log(calculaJurosSimples(2500, 0.005, 8))
console.log(calculaJurosComposto(2500, 0.005, 8))
