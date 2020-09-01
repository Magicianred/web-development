// formas de criar objetos

// formas de notação literal

const spellBook = {}
console.log(spellBook)

// Object in

const rod = new Object
console.log(rod)

// Funcoes construtoras

function espada(nome, level, vocacao){
  // com o this é possível editar essas nomes de fora do objeto.
    this.nome = 'SoulCutter'
    this.level = 200
    this.vocacao = 'Knights'
    this.getQuantosLevelFalta = (level_atual) => {
      return 'Faltam ' + (level_atual - level) + ' niveis'
    }
}

const novaEspada = new espada('Assassin Dagger', 40, 'Todas')

console.log(novaEspada)

console.log(novaEspada.getQuantosLevelFalta(142))


// funcao Factory

function criarEspada(nome, level, vocacao){
  return {
          nome,
          level,
          vocacao
        }
}

const novaEspadaSlayer = new criarEspada('Slayer of Destruction', 200, 'Knights')
console.log(novaEspadaSlayer)


// Object.create

const botas = Object.create(null)
botas.nome = 'Boots of Haste'
console.log(botas)

// Função Json

const fromJSON = JSON.parse('{"nome":"camila"}')
console.log(fromJSON.nome)
