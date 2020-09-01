// Uso de Object.create e iteração sobre os atributos

const flask = {
  nome: 'frasco de vidro',
  cor: 'transparente'
}

const reagentFlask = Object.create(flask)

reagentFlask.nome = 'Flask with Snake Poison'
console.log(reagentFlask.cor)


const lifefluid = Object.create(flask, {
  nome: {value: 'LifeFluid', writable: false, enumerable: true}
})

console.log(lifefluid.nome)
console.log(`A cor do frasco de ${lifefluid.nome} é ${lifefluid.cor}`)


console.log(Object.keys(reagentFlask))
console.log(Object.keys(lifefluid))


for(let key in lifefluid){
  console.log(key)
}

for(let key in lifefluid){
    lifefluid.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
  }
