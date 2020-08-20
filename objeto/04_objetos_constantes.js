// a variavel aponta para um local de memoria e os dados apontam para outro local

const machado = {'nome': 'Phantasmal Axe'}
machado.nome = 'Chopper of Destruction'
console.log(machado)

// não consegue mais mexer no objeto (nem adicionar atributos, nem deletar etc)
Object.freeze(machado)

machado.nome = 'Angelic Axe'
console.log(machado)
