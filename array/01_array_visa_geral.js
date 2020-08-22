/*
Array em js é um objeto
Ideal é trabalhar com dados homogênios
forma ideal de criação é a forma literal
*/

console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

wands = ['wand of cobra', 'wand of dimensions', 'wand of energy']

wands.sort()
console.log(wands)

delete wands[1]
console.log(wands)
wands.splice(1, 0, 'blossom staff', 'wand of tainha') // insere nas posicoes 1 e 0 do array os itens
console.log(wands)
