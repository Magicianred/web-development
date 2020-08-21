// notação ecma 2015

class Lancamento{
  constructor(nome = 'generico', valor = 0){
    this.nome = nome
    this.valor = valor
  }
}


class CicloFinanceiro{
  constructor(mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  adicionarLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
}

sumario(){
  let valorConsolidado = 0
  this.lancamentos.forEach(l => {
    valorConsolidado += l.valor
  })
  return valorConsolidado

  }
}



const salario = new Lancamento('Salario', 1000)
const contaLuz = new Lancamento('Luz', 100)

const contas = new CicloFinanceiro(8, 2020)
contas.adicionarLancamentos(salario, contaLuz)

console.log(contas.sumario())
