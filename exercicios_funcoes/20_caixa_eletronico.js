/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const cedulas = function(valor){
    let notas_100 = parseInt((valor/100))
    valor = valor - (notas_100 * 100)

    if(notas_100 == 0){}
    else{
      console.log(`${notas_100} nota(s) de R$ 100`)
    }

    let notas_50 = parseInt((valor/50))
    valor = valor - (notas_50 * 50)

    if(notas_50 == 0){}
    else{
      console.log(`${notas_50} nota(s) de R$ 50`)
    }

    let notas_10 = parseInt((valor/10))
    valor = valor - (notas_10 * 10)
    if(notas_10 == 0){}
    else{
      console.log(`${notas_10} nota(s) de R$ 10`)
    }

    let notas_5 = parseInt((valor/5))
    valor = valor - (notas_5 * 5)
    if(notas_5 == 0){}
    else{
      console.log(`${notas_5} nota(s) de R$ 5`)
    }

    let notas_1 = parseInt((valor/1))
    valor = valor - (notas_1 * 100)
    if(notas_1 == 0){}
    else{
      console.log(`${notas_1} nota(s) de R$ 1`)
    }
}


console.log(cedulas(18))
