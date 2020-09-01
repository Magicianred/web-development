/*
Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = function(numero){
    return (numero < 2) ? 1: fatorial(numero -1) * numero
}

console.log(fatorial(3))
