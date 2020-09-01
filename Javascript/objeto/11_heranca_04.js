function meuObjeto(){
}

console.log(meuObjeto.prototype)

const objeto_1 = new meuObjeto
const objetto_2 = new meuObjeto


console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype) // true, ele existe a partir de uma função
console.log(Function.prototype.__proto__ === Object.prototype) // true, a função é um prototipo
console.log(Object.prototype.__proto__ === null) // chegou ao fim da cadeia de prototipos, ele existe porem nao possui mais referencias
