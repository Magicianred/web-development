class Avo{
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo{
  constructor(sobrenome, profissao = 'químico'){
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai{
  constructor(){
    super('nascimento')
  }
}

const filho = new Filho
console.log(filho)
