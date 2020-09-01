/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
bem como a soma dos elementos.
*/

const progressaoAritmetica = function(qtd_termos, primeiro_termo, razao){
      for(let i = 0; i < qtd_termos; i++){
          console.log(primeiro_termo + i*razao)
      }
}

const progressaoGeometrica = function(qtd_termos, primeiro_termo, razao){
    for(let i = 0; i < qtd_termos; i++){
        console.log(primeiro_termo * (i**razao))
    }
}


console.log(progressaoAritmetica(5, 1, 2))
console.log(progressaoGeometrica(5, 1, 2))
