const jogo = {}

// cria atributos dinamicamente
jogo.nome = "batalha naval"

console.log(jogo.nome)

function Jogo(nome){
  // this proporciona que o atributo associado seja visivel
  this.nome = nome
  this.comprar = function(){
    console.log("jogo comprado")
  }
}

// instanciando o objeto jogo passando o parametro nome
const jogo_1 =  new Jogo('Graveyard Keeper')
const jogo_2 = new Jogo('Tropico')

// mostra o nome do objeto, que por meio do this ficou público
console.log("jogo_1", jogo_1.nome)
console.log("jogo_2", jogo_2.nome)

// chamado a função dentro da função: objeto.funcao (mesmo que python)
jogo_1.comprar()
