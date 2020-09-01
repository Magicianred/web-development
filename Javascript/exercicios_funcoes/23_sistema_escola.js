/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const mediaNotas = function(codigo, nota_1, nota_2, nota_3){
     let notas = [nota_1, nota_2, nota_3]
     let ordenar = notas.sort()
     let media = (ordenar[0] * 0.3 + ordenar[1] * 0.3 + ordenar[2] * 0.4)

     if(media < 5){
        return console.log(`aluno ${codigo} Nota 1: ${nota_1} Nota 2: ${nota_2} Nota 3: ${nota_3} Media: ${media.toFixed(2)} REPROVADO`)
    }else{
        return console.log(`Código aluno ${codigo} Nota 1: ${nota_1} Nota 2: ${nota_2} Nota 3: ${nota_3} Media: ${media.toFixed(2)} APROVADO`)
       }
     }
mediaNotas(123, 2.8, 6, 3.5)
