function getInteiroAleatorioBingo(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}


let bola_bingo = 0

while (bola_bingo != -1){
  bola_bingo= getInteiroAleatorioBingo(-1, 99)
  console.log(`Bola sorteada: ${bola_bingo}`)
}
