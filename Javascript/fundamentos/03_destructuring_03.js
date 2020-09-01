/* destructuring com funções
os {} nesse caso simbolizão que serão utilizados esses valores do objeto
sem ter que por ponto para acessar o atributo
*/
function range_aleatorio({min = 0, max = 1000}){
  /* Math.random() retorna um número aleatório entre 0 e 1
  para fazer os valores aleatórios num intervalo, é necessário passar o intervalor desejado.
  (max - min) incluindo o min
  */
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {max: 50, min: 30}
console.log(rand(obj))
