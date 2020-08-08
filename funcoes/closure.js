/*closure é o escopo criado quando uma função é declarada
 esse escopo permite a função acessar e manipular variáveis externas a função
contexto léxico em ação
 */


const globo =  'Global'

function fora(){
  const globo = 'Local'
  function dentro(){
    return globo
  }
  return dentro
}

const meuGlobinho = fora()
console.log(meuGlobinho())
