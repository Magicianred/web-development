const cardapio = function(codigo, quantidade){
  switch(codigo){
      case 100:
        return 'Cachorro quente, total de R$ ' + (quantidade * 3)
        break
      case 200:
        return 'Hamburguer simples, total de R$ ' + (quantidade * 4)
        break
      case 300:
        return 'Cheeseburguer,  total de R$ ' + (quantidade * 5.50)
        break
      case 400:
        return 'Bauru, total de R$ ' + (quantidade * 7.50)
        break
      case 500:
        return 'Refrigerante, total de R$ ' + (quantidade * 3.50)
        break
      case 600:
        return 'Suco, total de R$ ' + (quantidade * 2.80)
        break
      default:
       return ' Produto não existente'
  }
}

console.log(cardapio(600, 2))
