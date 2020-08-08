/*
class Pirata{
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`My name is ${this.nome}`)
  }
}


const pirata_1 = new Pirata('Captain Jones')
pirata_1.falar()
*/


function Pirata(nome){
  this.nome = nome
  this.falar = function(){
    console.log(`Meu nome é ${nome}`)
  }
}

const lethalLissy = new Pirata('Letal Lissy')
lethalLissy.falar()
