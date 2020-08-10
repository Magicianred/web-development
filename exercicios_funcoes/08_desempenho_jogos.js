/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/


stringExercicio =  "10 20 20 8 25 3 0 30 1"

let pontuacoes_e_partidas = stringExercicio.split(" ")


const menor_valor = "" + Math.min(...pontuacoes_e_partidas)
const maior_valor = "" + Math.max(...pontuacoes_e_partidas)
const index_menor_valor = pontuacoes_e_partidas.indexOf(menor_valor)
const index_maior_valor = pontuacoes_e_partidas.indexOf(maior_valor)
const primeiro_maior_valor = maior_valor // primeiro array
todos_arrays = []
let ultrapassou = 0


console.log('A menor pontuação é', menor_valor,'na', index_menor_valor, 'jogada')
console.log('A maior pontuação é', maior_valor,'na', index_maior_valor, 'jogada')


for(let item in todos_arrays){
    if(todos_arrays[i] > primeiro_maior_valor){
        ultrapassou++
    return console.log(ultrapassou)
  }
}
// formar um array de todas as partidas, comparando o maior valor da primeira partida
// com os demais valores de todas as outras partidas, e assim terá quantas vezes ultrapassou
// o maximo
