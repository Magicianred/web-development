function quantidadeCartasPorPessoa(numero_pessoas, tempo){
  const numero_cartas = numero_pessoas * tempo
  if(tempo > 60)

    {
      console.log('Partidas mais curtas são menos cansativas :)')
    }
  else
    {
      return numero_cartas
    }
}

console.log(quantidadeCartasPorPessoa(2, 30))
console.log(quantidadeCartasPorPessoa(1))
console.log(quantidadeCartasPorPessoa())
console.log(quantidadeCartasPorPessoa(10,20,28))
console.log(quantidadeCartasPorPessoa(2, 80))
