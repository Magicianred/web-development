/*
Usar promise para encapsular a chamada para um arquivo
o resultado da promise deve ser o conteúdo do arquivo
*/

// Load the fs class using the require command

/*
Then we call the readFile method that gets 3 parameters:
The name of the file ('DATA' in this case),
the encoding of the file ('utf8' in the examples), and a function
*/

/*
 async
let fs = require('fs')
let leitura = async() => {
    const conteudo = await(fs.readFile('./desafio_leitura.txt', 'utf-8'))
    .then(conteudo.toString())
}

*/

/*
function(caminho){
    return new Promise(solucao => {
        fs.readFile(caminho, 'utf-8', function(_, contents){
        solucao(contents.toString())
        }

        .then(conteudo => console.log("Conteúdo:", contents))
    })
}
*/

const fs = require('fs')
const arquivo = require('./desafio_leitura.txt')

function ler(arquivo){
    return new Promise(resolve => {
        fs.readFile(arquivo, 'utf8', function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log("depois ler")
    })
}

ler(arquivo)
.then(conteudo => console.log("then", conteudo))
