const refrigerantes = ['pureza', 'max laranjinha', 'coca cola', 'guarana jesus', 'pepsi']
refrigerantes.pop() // removo ultimo elemento


refrigerantes.push('fanta') // adiciona elemento na ultima posicao
console.log(refrigerantes )


refrigerantes.shift() // remove o primeiro elemento da lista
console.log(refrigerantes)

refrigerantes.unshift('sprite') // adiciona na primeira posição
console.log(refrigerantes)


refrigerantes.splice(1, 0, 'pepsi', 'laranjinha')
console.log(refrigerantes)

refrigerantes.splice(3, 1)
console.log(refrigerantes)

const spliceArray = refrigerantes.slice(2) // novo array gerado a partir do item 2 do array
console.log(spliceArray)

const splicedoiselementos = refrigerantes.slice(1, 4)
console.log(splicedoiselementos)
