/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

let numeroPar = numero => (numero % 2  == 0) ? numero : {}


let i = 1
while(i < 101){
  console.log(numeroPar(i))
  i++
}
