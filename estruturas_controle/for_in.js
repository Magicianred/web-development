const dadosRpg = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 30, 34, 50, 60, 100, 120]

for(let i in dadosRpg){
  console.log(i, dadosRpg[i])
}

const d20 = {
  lados: 20,
  cor: 'verde',
  material: 'acrilico',
  disponivel: true
}


for(let informacao in d20){ // colocar let para que fique apenas dentro do escopo do for
  console.log(`${informacao} = ${d20[informacao]}`)
}
