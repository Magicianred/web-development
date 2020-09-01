/*
​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function verificaArray(array_numeros){
    let par = 0
    let impar = 0
    for(let i = 0; i < array_numeros.length; i++){
        if(isNaN(array_numeros[i])){
          continue
        }
        if(array_numeros[i] % 2 == 0){
            par++
        }else{
            impar++
        }
      }
    return 'Pares: ' + par + ' Impar ' + impar
}

console.log(verificaArray([1, 2, 3, "b", 4, "a", 5, 6, 7, 8, 9, 10]))
