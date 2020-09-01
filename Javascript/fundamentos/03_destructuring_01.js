// retira do objetos os atributos que quer utilizar de forma simplificada

const perfume = {
  nome: "Miss Dior",
  fabricao: 2020,
  pais: "França",
  navio_transporte: {
    pais_saida: "França",
    tipo: "Navio cargueiro NLUA",
    radar: 12546
  }
}

const {nome, pais} = perfume
console.log(nome, pais)


// criando novas variaveis que receberam os mesmos valores
const { nome: a, pais: b} = perfume
console.log(a, b)


// pegando itens que estão aninhados
const {navio_transporte: {tipo, radar} } = perfume
console.log(tipo, radar)
