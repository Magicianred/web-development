function tratarErrorELancar(erro){
  // throw new Error("Ocorreu um erro, tente refazer")
  // throw 10
  // throw true
  // throw 'mensagem'
  throw{
    nome: erro.nome,
    msg: erro.message,
    date: new Date
  }
}

function ImprimirNomesMaiusculo(objeto){
  try {
    console.log(objeto.nome.toUpperCase() + '!')
  } catch (erro){
      tratarErrorELancar(erro)
  } finally{
    console.log('finalizando')
  }
}

const objeto = {nome: 'Camila'}
ImprimirNomesMaiusculo(objeto)
