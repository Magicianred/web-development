/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

const mediaIntVetor = function(vetor){
      let total = 0
      let contaInt = 0

      for(let i = 0; i < vetor.length; i++){
          if(Number.isInteger(vetor[i])){
            total += vetor[i]
            contaInt++
          }
      }
      return 'Média dos valores do array: ' + (total/contaInt)
}

console.log(mediaIntVetor([6,"a",10]))
