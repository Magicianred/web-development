const idades = [1, 3, 5]
console.log(idades[0])

// tamanho do array
console.log(idades.length)


// adicionar item no array em determinada posição
idades[0] = 11
console.log(idades)


// arrays podem ser compostos por diferentes tipos

idades.push({id: 81}, 27, false, true, "camila")
console.log(idades)

// remove ultimo item do array

console.log(idades.pop())

// remover mais de um item do array por posição

delete idades[0, 4]
console.log(idades)

// arrays são objetos

console.log(typeof idades)
