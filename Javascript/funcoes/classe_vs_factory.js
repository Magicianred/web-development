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


const Sorcerer = (nome) => {
  return {
    falar: () => console.log(`meu nome é ${nome}`)
  }
}

// não vai dar problema com o this causado
const new_sorcerer = Sorcerer('Ascending Ferumbras')
new_sorcerer.falar()
