const fs = require('fs');
const arquivo = require('./desafio_leitura.txt');

function lerArquivo() {
    return new Promise((resolveAi, erro) => {
        fs.readFile(arquivo, (deuErro, dados) => {
            if (deuErro) {
              return erro(deuErro);
            }
            resolveAi(dados);
        });
    });
}
