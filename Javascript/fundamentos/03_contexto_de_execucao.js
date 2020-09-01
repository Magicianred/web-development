/* se estiver executando js no frontend, sera utilizando o runtime do browser,
se estiver utilizando js no backend será utilizando o node.

front-Browser:
1. console do navegador
2. o maior objeto é o window *objeto global*
3. this chama window
4. let e const nao sao sobrescritas no contexto global,
acessadas somente referenciando elas mesma e nao via window
5. se criar funcao declarando diretamente function gato(nome){} ela é inserida
na window diretamente
6.pode acessar via this.gato que retornara true
7. global no node  = window no runtime do browser
8. cada arquivo é um módulo em node, no browser é diferente
*/

let mrLet = 'Mr Let'

global.globoterrestre = 'Terra'

this.localizacao = 'Siberia'
this.temperatura_negativa = true
this.cidade = 'Volskoya'

console.log(mrLet)
console.log(global.globoterrestre)
console.log(this.localizacao)
console.log(module.exports.localizacao)
console.log(module.exports === this)
console.log(module.expoerts)
