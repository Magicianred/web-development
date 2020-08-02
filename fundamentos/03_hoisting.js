// hoisting = "jogar para cima"

/*console.log("var sem declaração previa:", a)

var a = "Navio"

console.log("var após declaração:", a)
*/

function jogarAcima(){
  console.log("var without no name:", a)
  var a = "Janete"
  console.log("var with a name", a)
}


jogarAcima()
console.log("fora do escopo funcao", a)



function jogarAcima(){
  console.log("var without no name:", a)
  let a = "Janete"
  console.log("var with a name", a)
}
