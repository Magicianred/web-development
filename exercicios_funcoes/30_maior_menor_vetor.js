/*
​ Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e
menor valor dentro do vetor.
*/

const menorMaiorVetor = function(vetor){
      let maior
      let menor
      for(let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
          }else{
              if(vetor[i] > maior){
                    maior = vetor[i]
              }if(vetor[i] < menor){
                    menor = vetor[i]
              }
          }
      }
  return 'O maior valor é ' + maior + ' e o menor é ' + menor
}

  console.log(menorMaiorVetor([1,2,5,8,9,11]))
