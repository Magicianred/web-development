function Aula(nome, videoID){
  this.nome = nome
  this.videoID = videoID
}


const aula1 = new Aula("Bem vindo", 123)
const aula2 = new Aula("Até breve", 456)
console.log(aula1, aula2)

// new = função construtora que irá apontar para a referencia, que nesse caso é a função aula

function novo(funcao, ...params){ // recebe uma funcao e seus paramametros - simula o operador new essa funcao
  const objeto = {}
    objeto.__proto__ = funcao.prototype
    funcao.apply(objeto, params)
    return objeto // primeiro parametro vai ser this, e o segundo vai ser a lista de paramametros
  }

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)
