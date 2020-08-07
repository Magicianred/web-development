// Atribuir valor padrão para uma variável

function doces(a, b, c){
  a = a || 1 //a OU 1
  b = b || 1
  c = c || 1
  return a + b + c
}
/* 0 gera false, assumindo o segundo valor que é true, resultado 0 + 0 + 0 = 3
 para sair dessa condição é necessário ver se o valor é estritamente diferente de undefined (false), e somar o proprio valor

*/


/* Operador ternário, if condição true retorna primeiro resultado, else o ultimo
condição ? expressão_1 : expressão_2
*/
function combinacoes(a, b, c){
  a = a !== undefined ? a : 1 // se a é estritamente diferente de undefined assume valor a, else assume 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c // mais segura das três
  return a + b + c

}

console.log(combinacoes(), combinacoes(3), combinacoes(1, 2, 3), combinacoes(0, 0, 0, 0))


function somas(a = 1, b = 1, c = 1){
  return a + b + c
}

console.log(somas(), somas (3), somas(1, 2, 3), somas(0, 0 , 0))
