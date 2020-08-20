/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/


const inverteArray = function(vetorA, vetorB){
      let novoVetorA = Array.of(vetorB)
      let novoVetorB = Array.of(vetorA)
      return `Novo vetor A: ${novoVetorA} novo vetor B: ${novoVetorB}`
}


const vetorA = [1, 2, 3]
const vetorB = [10, 20, 30]

console.log(inverteArray(vetorA, vetorB))
