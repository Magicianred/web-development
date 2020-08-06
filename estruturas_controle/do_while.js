function dadoVinteLados(min, max){
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)
}

let lado = -1

do { // irá executar pelo menos uma vez o bloco como true
  lado = dadoVinteLados(-1, 20)
  console.log(`lado ${lado}`)
} while (opcao = -1)

console.log('Encerrada jogada')
