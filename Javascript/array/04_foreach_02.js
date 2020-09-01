/*
const implementarForeach = function(numero_elementos, nome){
     let cores
    for(let i = 0; i <numero_elementos; i++){
       cores.push(numero_elementos[i])
    }
    console.log(`${nome} ${cores}`)
}


implementarForeach(2, ['roxo', 'azul'])
*/

Array.prototype.forEach2 = function(callback){
  for(let i = 0; i <this.length; i++){
    callback(this[i], i, this)
  }
}


const cores = ['azul', 'branco', 'amarelo']

cores.forEach2(function(nome, indice){
  console.log(`${indice} ${nome}`)
})
