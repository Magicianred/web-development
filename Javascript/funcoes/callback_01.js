const runas = ['Animated Dead Rune', 'Sudden Death Rune', 'Chameleon Rune']

function imprimirRunas(nome, indice){
  console.log(`${indice +1}.${nome}`)
}

// para cada elemento no array a função imprimirRunas será aplicada
runas.forEach(imprimirRunas)

// cria uma função que retorna apenas o primeiro item do array sem o indice
runas.forEach(function(primeiro_item){
  console.log(primeiro_item)
})
