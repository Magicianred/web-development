/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

const calculaAnuidade = function(capital_inicial, mes){
  switch(mes){
    case 1:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 2:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 3:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 4:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 5:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 6:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 7:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 8:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 9:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 10:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 11:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    case 12:
        return (capital_inicial *((1 + 0.0005)**mes)).toFixed(2)
        break
    default:
        return console.log("Valor inválido")
  }
}


console.log(calculaAnuidade(120, 9))
