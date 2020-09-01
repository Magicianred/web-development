const cores = ['amarelo', 'azul', 'verde', 'roxo', 'rosa']

cores.forEach(function(nome, indice){
  console.log(`${indice * 1} ${nome}`)
})

cores.forEach(nome => console.log(nome))


const exibeCores = cores => console.log(cores)
cores.forEach(exibeCores)

/*
Um função callback do array possui três parâmetros:
nome, indice, proprio array, se passar mais parâmetros o callback será undefined.
exemplo:
*/

cores.forEach(function(nome, indice, array, x){
  console.log(`Nome ${nome}  Indice ${indice} Array ${array} X ${x}`)
})
