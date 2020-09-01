const sequence = {
  _id:1,
  get(){
    return this._id++
  }
}

const produtos = {}

function salvarProduto(produto){
  if(produto.id === undefined){
    produto.id = sequence.id
  }else{
    produtos[produto.id] = produto
  }
  return produto
}

function getProduto(id){
  return produtos[id] || {}
}


function getProdutos(){
  return Object.values(produtos)
}

// exportando esse módulo
module.exports = { salvarProduto, getProduto, getProdutos}
