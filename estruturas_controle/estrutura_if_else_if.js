Number.prototype.entre =  function (inicio, fim){
  return this >= inicio && this <= fim
}

const imprimeGrauProtecao = function (fps){
  if (fps.entre(2, 15)){
    console.log('Baixo fator de proteção')
  }
  else if(fps.entre(25, 35)){
      console.log('Fator de proteção médio')
    }
  else if(fps.entre(40, 100)){
    console.log('Fator de proteção alto')
  }
  }

  imprimeGrauProtecao(30)
