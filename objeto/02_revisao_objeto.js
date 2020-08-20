/*
Objetos são uma coleção dinâmica de pares valor {'nome': 'camila'}
*/

const livro = new Object

livro.nome = 'Almanac of Magic'
livro['cor'] = 'Roxo' // se declarar dessa forma só acessa dessa forma

const spellBook = {
    nome: 'Crude Umbral SpellBook',
    level: 75,
    vocacao: ['Sorcerer', 'Druids'],
    dono:{
      nome:'Camila',
      endereco: 'Liberty Bay',
      mundo: 'Ferobra',
    }
  //  quantidadeDisponivelMundos: function(){}
}

// acessando objetos dentro de objetos
spellBook.dono.endereco = 'Edron'

console.log(spellBook.dono.endereco)
