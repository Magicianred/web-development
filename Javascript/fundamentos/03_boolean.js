let isAtivo = false
console.log(isAtivo)


isAtivo = true
console.log(isAtivo)


isAtivo = 1
// !! duas negações recebem valor de verdadeiro.
console.log(!!isAtivo)


console.log('as expressões verdadeiras são:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('as expressões falsas são:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


//retorna o primeiro ou o único valor verdadeiro que encontrar || = ou
console.log('' || null || 0 || 'camila')
