const contadorA = require('./06_instancia_unica')
const contadorB = require('./06_instancia_unica')


const contadorC = require('./06_instancia_nova')() // nesse caso não haverá o cache incremental, pois são novas instancias do objeto
const contadorD = require('./06_instancia_nova')()


contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
