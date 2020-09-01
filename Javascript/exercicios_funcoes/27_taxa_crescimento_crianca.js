/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function verificaAltura(altura_1, taxa_crescimento_1, altura_2, taxa_crescimento_2){
    if(altura_1 == altura_2){
        if(taxa_crescimento_1 > taxa_crescimento_2){
            return 'A criança 1 ultrapassará em um ano a criança 2'
        }else if(taxa_crescimento_2 > taxa_crescimento_1){
            return 'A criança 2 ultrapassará em um ano a criança 1'
        }else{
          return 'As crianças possuem a mesma altura'
        }
    }else{
        if(altura_1 > altura_2){
            if(taxa_crescimento_1 >= taxa_crescimento_2){
                return ' A criança 2 não ultrapassará a criança 1'
            }else{
                return crescimentoCrianca(altura_1, taxa_crescimento_1, altura_2, taxa_crescimento_2)
              }if(taxa_crescimento_2 >= taxa_crescimento_1){
                return 'As crianças não iram atingir a mesma altura'
              }else{
                return crescimentoCrianca(altura_1, taxa_crescimento_1, altura_2, taxa_crescimento_2)
              }
            }
          }
        }

function crescimentoCrianca(altura_1, taxa_crescimento_1, altura_2, taxa_crescimento_2){
    let anos = 0
    while(altura_2 < altura_1){
          altura_1 += taxa_crescimento_1
          altura_2 += taxa_crescimento_2
          anos++
    }
    return 'Irá demorar ' + anos + " ano para atingirem a mesma altura"
}


console.log(verificaAltura(161, 2, 164, 4))
