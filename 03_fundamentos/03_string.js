const animal = "Elefante"

/* retorna o valor que esta na posicao determinada
   Se o valor buscado estiver fora do range, js retornará vazio */

console.log(animal.charAt(3))

// retorna o valor da tabela ascii para a letra
console.log(animal.charCodeAt(5))

// retorna o indice do item na palavra
console.log(animal.indexOf('f'))

// slices do array
console.log(animal.substring(5))

// concatenação de strings
console.log("O animal ".concat(animal).concat(" possui patas enormes"))

//replace
console.log(animal.replace("e", 3))

//split do array
console.log("Clovis , Nicolas , Ryuk".split(","))
