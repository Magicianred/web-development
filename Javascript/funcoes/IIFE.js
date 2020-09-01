// iife immediately invoked function expression
// muito utilizado para fugir do escopo global, bastante utilizada a partir do angular 1
(function(){
  // tudo que criar aqui dentro esta disponivel apenas aqui dentro (variaveis etc)
  console.log("Será executada na hora")
  console.log("Foge do escopo mais abrangente")
})()
