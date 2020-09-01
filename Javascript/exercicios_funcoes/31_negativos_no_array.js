/*
​ Escrever um algoritmo que percorre um vetor de inteiros, conta quantos
 números negativos há nesse vetor
e imprime a quantidade no console
*/


const verificaNegativo = function(vetor){
      let contaNegativo = 0
      for(let i = 0; i < vetor.length; i++){
          if(vetor[i] < 0){
              contaNegativo++
          }
      }
      return 'Números negativos no array: ' + contaNegativo
}
console.log(verificaNegativo([0, 5,27, -13, 4, -65]))
