// diferença do call e do apply é a forma de passar parâmetros

function getPreco(imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}


const wand = {
  nome: 'wand of cosmic energy',
  preco: 4500,
  desc: 0.15,
  getPreco
}

console.log(getPreco()) // retorna com NaN porque no escopo global eles de fato não estao

global.preco = 5000
global.desc = 0.3

console.log(getPreco())
console.log('wand', wand.getPreco())

const potion = { preco: 30, desc: 0.1}
console.log('potion', getPreco.call(potion)) // usando call
console.log('potion com apply', getPreco.apply(potion))


// contexto = referencia 
console.log(getPreco.call(wand, 0.1, 'Tibia coin')) // contexto e parametros
console.log(getPreco.apply(wand, [0.1, 'Tibia coin'])) // contexto e array com os parametros
