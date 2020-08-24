const produtos = [
  {nome: "notebook", preco: 2700, fragil: true},
  {nome: "celular", preco: 900, fragil: true},
  {nome: "xicaras porcelana", preco: 125, fragil: true},
  {nome: "papeis carta", preco: 25, fragil: false}
]

// callback: função passada como parametro para outra

console.log(produtos.filter(function(produto){
  return produto.preco > 100
}))

const fragil = produtos.filter(function(produto){
  return produto.fragil == true
})

console.log(fragil)


const filtraNome = produtos.filter(function(produto){
  return produto.nome == "xicaras porcelana"
})

console.log(filtraNome)

// outro modo é passar essa funcao como parametro para o filter
const fragil2 = produto => produto.fragil == true

console.log(produtos.filter(fragil2))
