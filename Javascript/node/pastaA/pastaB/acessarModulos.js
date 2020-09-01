const moduloA = require('../../01_modulo_a.js')
console.log(moduloA.ola)

const encontraArquivoSaudacao = require('saudacao')
/*encontrou o arquivo porque ao inserir o nome do módulo, o node procura o arquivo index.js dentro
da pasta, caso não possua esse arquivo retornará um erro.
*/
console.log(encontraArquivoSaudacao)


const http = require('http')
http.createServer((request, response) => {
  response.write('200 OK')
  response.end()
}).listen(8080)
