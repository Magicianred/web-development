/* é permitido armazenar funções em variáveis
funções anonimas são funções sem nome só com o function declarado*/

const fazerCha = function(erva){
  console.log("esquentando água com o ingrediente mágico c(_)", erva)
}

fazerCha("erva cidreira")


// usando arrow para reduz a sintaxe. =>

const pintarCabelo = (cor) => {
  return console.log("pintando o cabelo com a cor S(o_o)S", cor)
}

pintarCabelo("preto")

// return implicito

let nadar = (meio) => console.log("nadando em", meio)

nadar("gelatina")
