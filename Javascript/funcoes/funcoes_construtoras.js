function moto(velocidadeMax = 120, delta = 5){

// atributo privado
let velocidadeAtual = 0

// metodo publico
this.acelerar = function(){
  if(velocidadeAtual + delta <= velocidadeMax){
    velocidadeAtual += delta
  }else{
    velocidadeAtual = velocidadeMax
  }
}
// metodo publico - por meio do this ele fica visivel fora da funcao referenciando esse objeto.
this.getVelocidadeAtual = function(){
  return velocidadeAtual
}
}


const fazer = new moto
fazer.acelerar()
console.log(fazer.getVelocidadeAtual())
