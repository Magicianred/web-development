// verifica se máximo é menor que o minimo no array
function aleatorio([min = 0, max = 1000]){
  // criando um array com os valores min e max na posição correta por maior valor
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}


console.log(aleatorio([660, 30]))
