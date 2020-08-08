/*closure é o escopo criado quando uma função é declarada
 esse escopo permite a função acessar e manipular variáveis externas a função
contexto léxico em ação
 */


const x =  'Global'

function fora(){
  const x = 'Local'
  function dentro(){
    return x
  }
  return dentro
}


const armazenarFora = fora()
console.log(armazenarFora())
// o retorno será 'local', pois no escopo onde a funcao fora foi criada
// a variavel x foi declarada como 'local'
