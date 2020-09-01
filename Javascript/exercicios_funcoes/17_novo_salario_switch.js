/*
​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário
e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso
default que indique que o plano é inválido.
*/

const verificaAumentoSalario = function(plano, salario_atual){
    switch(plano){
        case "A":
            return 'Novo salario será ' + (salario_atual + (salario_atual * 0.1))
        break
        case "B":
            return 'Novo salario será ' + (salario_atual + (salario_atual * 0.15))
        break
        case "C":
            return 'Novo salario será ' + (salario_atual + (salario_atual * 0.2))
        break
        default:
            return 'Plano inválido'
    }
}

console.log(verificaAumentoSalario("C", 1250))
