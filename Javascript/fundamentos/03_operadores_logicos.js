/* Situação: há dois trabalhos, se os dois derem certo poderá comprar
perfume e fone, se apenas um der certo, poderá comprar um fone simples, e
se nenhum der certo não poderá sair de casa
*/

function comprar(trabalho_1, trabalho_2){
  // operador de uma pipe só | comparar bit a bit com o outro objeto
  const comprarPerfume = trabalho_1 || trabalho_2 // ou um ou outro
  const comprarFone = trabalho_1 && trabalho_2 // tem que ser os dois
  const comprarFoneSimples = trabalho_1 != trabalho_2 // ou exclusivo - xor , só retorna verdadeiro se as duas entradas forem diferentes
  const manterSaudavel = !comprarPerfume // operador unário
  return {comprarPerfume, comprarFone, comprarFoneSimples, manterSaudavel} // retorna um objeto, desde o ecma 2015 os pares estao implicitos
}

console.log(comprar(true, true))
console.log(comprar(true, false))
