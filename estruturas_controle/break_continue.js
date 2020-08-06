const cores = ['verde', 'amarelo', 'azul', 'vermelho', 'roxo', 'laranja', 'preto', 'rosa']

for(let i in cores){
  if(cores[i] == 'roxo'){
      break
  }
  console.log(`i ${i} = ${cores[i]}`)
}

for(let x in cores){
  if(cores[x] == 'roxo'){
    continue
  }
  console.log(`x ${x} = ${cores[x]}`)
}
