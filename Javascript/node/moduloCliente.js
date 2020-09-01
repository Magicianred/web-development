const moduloA = require('./01_modulo_a') // usa o caminho do arquivo na pasta - tudo o que for importtado desse modulo sera armazenado como objeto na variavel 'ModuloA'
const moduloB = require('./02_modulo_b')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.AteLogo)
console.log(moduloA)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
