/* Numeros inteiros podem possuir virgula, desde que seja zero após a vírgula.
*/

const volume = 750.0
const paginas = 354
const pi = 3.14

console.log(volume, paginas)
console.log(Number.isInteger(volume))
console.log(Number.isInteger(paginas))
console.log(Number.isInteger(pi))


const prova_1 = 8.4
const prova_2 = 5.5
const media = (prova_1 + prova_2)/2

//imprime duas casas apos a virgula

console.log(media.toFixed(2))

//imprime o binário
console.log(media.toString(2))
