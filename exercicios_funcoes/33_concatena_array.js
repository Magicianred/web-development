/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
let array_int = [1,2,3,4]
let array_string = ["a", "b", "c", "d"]
let array_decimais = [10.0, 12.2, 11.1, 13.4]

const concatArray = function(array_int, array_string, array_decimais){
      let mix_1 = array_int.concat(array_string, array_decimais)
      let mix_2 = [...array_int,...array_string, ...array_decimais]
      return mix_1 + mix_2
}

console.log(concatArray(array_int, array_string,array_decimais))
