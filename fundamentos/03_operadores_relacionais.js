// os valores são iguais
console.log('1' == 1)
// estritamente iguais
console.log('1' === 1)
// sao iguais
console.log('3' != 3)
// estritamente diferentes
console.log('3' !== 3)
console.log(3 < 2)
console.log(3 > 2)

const data_1 =  new Date(0)
const data_2 = new Date(0)
console.log(data_1 == data_2)
console.log(data_1 === data_2)

// mesmo tipo e mesmo valor 1 janeiro de 1970 e sao data
console.log(data_1.getTime() == data_2.getTime())
console.log(data_1.getTime() === data_2.getTime())
console.log(null == undefined)
console.log(null === undefined)
// mais recomendado utilizar estritamente
