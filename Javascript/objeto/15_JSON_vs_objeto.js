/*
Devido a suas características textuis, o Json é facilmente interpretado por diferentes
linguagens, tornando ele praticamente universal e utilizado para comunicação
entre sistemas que trabalham com diferentes linguagens(podendo ser desde o baixo nível até o alto)
*/

const gatoPreto = {nome: 'ryuk', idade: 2, barulhoRyukFaz(){ return 'Miau'}}
// não irá executar a função pois ele é apenas formato textual e não executa funções.
console.log(JSON.stringify(gatoPreto))


/// console.log(JSON.parse("{a: 1, b:2, c:3}")) // gera erro logo no inío da interpretação
console.log(JSON.parse('{"nome": "ryuk"}'))
