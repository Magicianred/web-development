
/* var tem escopo global e de função
let tem escopo
- global
- bloco
- função
 A prioridade é sempre o escopo no interpretador
*/

let escopo = "estou fora"

{
  let escopo = "escopo interno"
  console.log(escopo)
}

console.log(escopo)
