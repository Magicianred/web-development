const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url).then(function(response){
    const funcionarios = response.data
    const func_chinesas = funcionarios.filter(function(funcionaria){
      return (funcionaria.pais === 'China' && funcionaria.genero === 'F')
    })
    const salario = func_chinesas.sort((func_a, func_b) => (func_a.salario > func_b.salario) ? 1 : -1)[0]
    console.log(salario)
    })
