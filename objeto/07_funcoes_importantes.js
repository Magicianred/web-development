const potion ={
  nome: 'Flask of Hallucinogen',
  peso: 1.65
}

// Object.keys
console.log(Object.keys(potion))

// Object.values
console.log(Object.values(potion))

// entries
console.log(Object.entries(potion))

Object.entries(potion).forEach(([chave, valor]) => {
  console.log(`${chave} ${valor}`)})


Object.defineProperty(potion, 'vocacao', {
    enumerable: true,
    writable: false,
    value: 'todas'

})

potion.vocacao = 'druida' // nao permitiu sobrescrecer porcausa do writable: false
console.log(potion)

// Object.assign (ECMA 2015)
const destino_objetos = {a: 1}
const a1 = {b: 2}
const a2 = {c: 3, d:4}
const objeto_assign = Object.assign(destino_objetos, a1, a2)
console.log(objeto_assign)
