// Cadeia de prototipos - Prototype Chain
// todos herdam do Object.prototype
const dragon = {cor: 'verde', ataque: 'aereo', tipo_ataque: 'fisico', vida: 1000}

const dragonHatchling = {__proto__: dragon, vida_hatchling: 380}

console.log(dragonHatchling.cor)



const anyMount = {
  velocidade_atual: 0,
  velocidade_max: 500,
  acelerar(delta) {
    if(this.velocidade_atual + delta <= this.velocidade_max){
      this.velocidade_atual += delta
    }else{
      this.velocidade_atual = this.velocidade_max
    }
  },
  status(){
    return `${this.velocidade_atual} km/hora de ${this.velocidade_max}`
  }
}

const draptor = {
  nome: 'draptor',
  velocidade_max: 350 // shadowing da velocidade máxima
}

const flyingBook = {
  nome: 'Flying Book',
  status(){ // shadowing da funcao status
    return `${this.nome}: ${super.status()}` // chamou o super para invoque a partir do pai. o this ficaria recursivo aqui
  }
}


// estabeler a relação de prototipos
Object.setPrototypeOf(draptor, anyMount) // 1 - objeto - 2 o prototipo do objeto
Object.setPrototypeOf(flyingBook, anyMount)

console.log(draptor)
console.log(flyingBook)

flyingBook.acelerar(125)
console.log(flyingBook.status())
