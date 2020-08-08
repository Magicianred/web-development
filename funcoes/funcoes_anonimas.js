const soma = function (a, b){
  return a + b
}

const imprimirResultado = function(a, b, operacao = soma){
  console.log(operacao(a, b))
}

imprimirResultado(10, 11)
imprimirResultado(10, 11, soma)
imprimirResultado(10, 15, function(x, y){
  return x - y
})

imprimirResultado(10, 11, (x, y) => x * y)

const runa = {
  tipo: function(){
    console.log('exevo flam hur')
  }
}

runa.tipo()
