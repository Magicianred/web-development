/*
no runtime (node) vai retornar true, porém, no navegador vai ser false
porque lá o objeto 'global' não existe, é window
*/

let comparaComThis = function(parametro){
  console.log(this === parametro)
}

comparaComThis(global)


const objeto = {}
comparaComThis = comparaComThis.bind(objeto)

comparaComThis(global)

// this aponta pro objeto corrente aonde a função foi definida
let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(objeto)
comparaComThisArrow(objeto)
