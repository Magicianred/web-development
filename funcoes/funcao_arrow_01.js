/* Função arrow sempre será anônima, se quiser acessa-la deve-se atribuir ela a uma variável
*/

let colocaLacinhoGato = function(lacinho){
  return " Colocando " + lacinho + " no gatinho "
}

// reduzindo tamanho da declaração com arrow function

colocaLacinhoGato = (lacinho) => {
  return "colocando " + lacinho + " no gatinho "
}


/*
quando a funcao tiver apenas um parâmetro, pode remover o parênteses.
é possível usar () ou _ quando o parâmetro estiver vazio.
*/

colocaLacinhoGato = lacinho => " colocando " + lacinho + " no gatinho "
