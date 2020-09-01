const carrinho = [
  '{"nome": "livro", "preco": 56.25}', '{"nome": "lapiseira", "preco": 8.50}', '{"nome": "caneta", "preco": 1.50}'
]

const paraJson = carrinho => JSON.parse(carrinho)
const preco = produto => produto.preco

const resultado = carrinho.map(paraJson).map(preco)
console.log(resultado)


Array.prototype.map2 = function(callback){
  const novo_array = []
  for(let i = 0; i <this.length; i++){
    novo_array.push(callback(this[i], i, this))
  }
  return novo_array
}
