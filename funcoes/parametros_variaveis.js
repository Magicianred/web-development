function soma(){
  let soma = 0
  for(i in arguments){
    soma += arguments[1]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2.2, 3.3, 7.7))
console.log(soma(3.3, "clóvis"))
