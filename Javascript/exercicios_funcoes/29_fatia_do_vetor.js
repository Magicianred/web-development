/*
​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/


const sliceArray = function(array_numeros){
      let fora_intervalo = 0
      let dentro_intervalo = 0
      for(let i = 0; i < array_numeros.length; i++){
          if((array_numeros[i] >= 10) && (array_numeros[i] <= 20)){
              dentro_intervalo++
          }else{
               fora_intervalo++
          }
      }
      return 'Dentro do intervalo: ' + dentro_intervalo + ' Fora intervalo: ' + fora_intervalo
      }

console.log(sliceArray([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))
