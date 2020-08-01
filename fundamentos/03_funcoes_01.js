/* funções, como tudo, devem ter bons nomes.
funções são declaradas pela palavra function
funções podem ser chamadas passando paramêtros incompletos
*/

function lavarRoupa(detergente, amaciante, roupa){
  console.log("Misturando o: ", detergente
  +  "e", amaciante, "e lavando as:", roupa, "na água morna")
}


/* na hora de chamar a função, passar os tipos nos parâmetros, ou usar variáveis
 que tiveram tipos declarados.*/
lavarRoupa(" brilhante "," fofo", " blusas ")


/* é possível setar valor default para os parâmetros
a ordem de chamada dos parâmetros importa, assim como ordem de declaração*/
function salario(extras,base = 3500,){
  return base + extras
}

// se base = 3500 estivesse no lado esquerdo da NaN pq fica como 350 + extras literal
console.log(salario(350))
