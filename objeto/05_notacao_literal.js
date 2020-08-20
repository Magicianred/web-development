const a = 1
const b = 2
const c = 3

const objeto_1 = {'a':a, 'b':b, 'c':c}
const objeto_2 = {a, b, c}

const nomeAttr = 'nota'
const valor = 6.66

const objeto_3 = {}
objeto_3['atributo'] = valor

const objeto_4 = {['atributo']: valor}
console.log(objeto_4)

const objeto_5 = {
  funcao_1: function(){

  }, //ecma 2015
  funcao_2(){

  }
}

console.log(objeto_5)
