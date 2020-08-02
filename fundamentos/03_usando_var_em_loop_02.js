const funcs = []

for (var i = 0; i < 10; i++ ){
  funcs.push(function(){
    console.log("dentro da função", i)
  })
}

// problema histórico do js que retorna 10 nos dois casos.
funcs[2]()
funcs[8]()
