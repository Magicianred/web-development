const sequence = {
  id:1,
  get(){
    return this.id++
  }
}

const produtos = {}

function salvarProduto(){
  if(!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

function getProduto(id){
  return produtos[id] || {}
}


function getProdutos(){
  return Object.values(produtos)
}

// exportando esse módulo
module.exports = {salvarProduto, getProduto, getProdutos}
