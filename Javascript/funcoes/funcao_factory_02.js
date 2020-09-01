function criarWand(nome, level_requerido, tipo, dano_medio, mana_por_ataque, peso_oz){
  return { // não precisa por o par do objeto pois já esta implicito nesse caso.
    nome,
    level_requerido,
    tipo,
    dano_medio,
    mana_por_ataque,
    peso_oz
  }
}

console.log(criarWand('Wand of Destruction', 200, 'Energy', 88, 18, 35))
