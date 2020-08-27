const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = lista_funcionarios => {
  lista_funcionarios.pais === 'China'
}

const mulheres = lista_funcionarios =>{
  lista_funcionarios.genero === 'F'
}

const salario = lista_funcionarios =>{
  if(chineses && mulheres){
    return lista_funcionarios.salario
  }
}


axios.get(url).then(function(response){
    const funcionarios = response.data
    console.log(funcionarios)
})
