function soma(){
  let soma = 0

  // arguments é o array de parametros total recebido pela funcao, existe outra opção mais recente
  for(i in arguments){
    soma += arguments[1]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2.2, 3.3, 7.7))
console.log(soma(3.3, "clóvis"))
