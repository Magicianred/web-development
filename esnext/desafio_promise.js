/*
Usar promise para encapsular a chamada para um arquivo
o resultado da promise deve ser o conteúdo do arquivo
*/

// Load the fs class using the require command

let fs = require('fs')
let path = require('path')

const caminho = path.join(__dirname, 'desafio_leitura.txt')
/*
Then we call the readFile method that gets 3 parameters:
The name of the file ('DATA' in this case),
the encoding of the file ('utf8' in the examples), and a function
*/

let a = fs.readFile(caminho, 'utf-8', function(_, contents){
    return new Promise(conteudo => console.log("Conteúdo lido"))
    .then(conteudo => conteudo.toString())
})

a(caminho)

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
