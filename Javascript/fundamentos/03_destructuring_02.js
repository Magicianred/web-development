// array chamado canetas recebendo primeira posição valor azul
const [canetas] = ["azul"]
console.log(canetas)

//atribuindo valores em diferentes posições. espaço pula aquela posicao no array
const [cores,  ,tamanhos, tinta = true ] = ["vermelho", "médias"]
console.log(cores, tamanhos, tinta)


//arrays podem ser compostos por outros arrays

const [, [, valor]] = [[, 8, 8]]
