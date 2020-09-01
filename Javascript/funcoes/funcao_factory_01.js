// funcao que retorna um objeto

//factory simples

function criaUmaWand(){
  return {
          nome: 'Cobra Wand',
          level_requerido: 270,
          tipo: 'Energy',
          dano_medio: 95,
          mana_por_ataque: 22,
          peso_oz: 19,
        }
}


function criarWand(nome, level_requerido, tipo, dano_medio, mana_por_ataque, peso_oz){
  return {
    nome: nome,
    level_requerido: level_requerido,
    tipo: tipo,
    dano_medio: dano_medio,
    mana_por_ataque: mana_por_ataque,
    peso_oz: peso_oz
  }
}

console.log(criarWand('Wand of Destruction', 200, 'Energy', 88, 18, 35))
