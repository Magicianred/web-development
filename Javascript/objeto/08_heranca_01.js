// piorizar composição


const greatManaPotion = {
    nome: 'roxo',
    level_minimo: 80,
    vocacao: ['sorcerer', 'druid'],
    peso: 3.1
  }

  const greatHealthPotion = {
    cor: 'vermelho',
    level_minimo: 80,
    vocacao: 'knight',
    peso: 3.1
  }

console.log(greatManaPotion.__proto__) //  para saber objeto pai - procura em toda cadeia de prototipo
console.log(greatManaPotion.__proto__ === Object.prototype)
console.log(greatHealthPotion.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function minhaPotion(){
  console.log(typeof Object, typeof minhaPotion)
}

console.log(Object.prototype, minhaPotion.prototype)
