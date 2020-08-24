const alunos = [
  {nome: "clovis", nota: 8.9, bolsista: false},
  {nome: "nicolas", nota: 9, bolsista: false},
  {nome: "ryuk", nota: 8.7, bolsista: true}
]

console.log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
})
