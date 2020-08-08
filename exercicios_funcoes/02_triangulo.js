/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const verificaTriangulo = function(lado_a, lado_b, lado_c){
  if(lado_a === lado_b === lado_c){
    return 'Equilátero'
  }else{
    if(lado_a === lado_b ||lado_a === lado_c || lado_c === lado_b){
      return 'Isósceles'
    }
    else{
      return 'Escaleno'
    }
    }
  }

console.log(verificaTriangulo(3,3,3))
