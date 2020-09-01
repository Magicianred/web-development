const carrinho = [
  '{"nome": "livro", "preco": 56.25}', '{"nome": "lapiseira", "preco": 8.50}', '{"nome": "caneta", "preco": 1.50}'
]

const paraJson = carrinho => JSON.parse(carrinho)
const preco = produto => produto.preco

const resultado = carrinho.map(paraJson).map(preco)
console.log(resultado)
