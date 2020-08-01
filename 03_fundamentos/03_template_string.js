const nome = "Camila"

// com o sinal de + é possível concatenar elementos
const concatenar = " Olá " + nome + " ! "

/* porém, fica mais prática utilizando o template (ecma2015),
  iniciado pelo ` e terminado com ` utilizando ${algo}*/
const template = `Olá ${nome}`


console.log(concatenar, template)

//Executa o que esta dentro da função ${}
console.log(`3 + 3 = ${3 + 3}`)


// uma função chamando uma segunda funçao
const up = texto => texto.toUpperCase()
console.log(`Ei...${up("cuidado")}`)
