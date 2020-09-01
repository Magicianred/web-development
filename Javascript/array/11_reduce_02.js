const alunos = [
  {nome: "clovis", nota: 8.9, bolsista: false},
  {nome: "nicolas", nota: 9, bolsista: false},
  {nome: "ryuk", nota: 8.7, bolsista: true}
]

/*
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
  return acumulador + atual
})
*/

const resultadoBolsistas = alunos.map(aluno => aluno.bolsita).reduce(function(acumulador,atual){
  return acumulador
})

// Todos alunos são bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista ?

const algumAlunoBolsista = (resultado, bolsista) => resultado || bolsista
