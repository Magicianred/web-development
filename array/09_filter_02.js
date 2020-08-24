Array.prototype.filter2 = function(callback){
  const novo_array = []
  for(let i = 0; i <this.length; i++){
    if(callback(this[i], i, this)){
      novo_array.push(callback(this[i]))
    }

  }
  return novo_array
}

const produtos = [
  {nome: "notebook", preco: 2700, fragil: true},
  {nome: "celular", preco: 900, fragil: true},
  {nome: "xicaras porcelana", preco: 125, fragil: true},
  {nome: "papeis carta", preco: 25, fragil: false}
]

// callback: função passada como parametro para outra


const filtraNome = produtos.filter2(function(produto){
  return produto.nome == "xicaras porcelana"
})

console.log(filtraNome)

// outro modo é passar essa funcao como parametro para o filter
const fragil2 = produto => produto.fragil == true

console.log(produtos.filter2(fragil2))

console.log(produtos.filter2(fragil2).filter2(filtraNome))
