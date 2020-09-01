// Object.preventExtensions - impede novos atributos. Pode excluir existentes

const produto  = Object.preventExtensions({
  nome:"qualquer", preco: 1.99, tag: "promoção"
})

console.log("extensível: ", Object.isExtensible(produto))

produto.nome = 'caneta colorida'
produto.descricao = 'caneta colorida cor verde'
delete produto.tag
console.log(produto)

// Object.seal - nao pode adicionar, excluir, mas pode modificador valores dos atributos que existem

const pessoa = { nome: 'Ferumbras', idade: 568}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

// Object.freeze - fica selado e com valores constantes
