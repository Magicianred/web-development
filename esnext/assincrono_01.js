const fs = require('fs');
const arquivo =  require('./desafio_leitura.txt')

async function lerArquivo() {
    return new Promise((resolveAi, erro) => {
        fs.readFile(arquivo, 'utf-8', (deuErro, dados) => {
            if (deuErro) {
              return erro(deuErro);
            }
            resolveAi(dados);
        });
    });
}

async function chamaArquivo() {
    const arquivo = await lerArquivo();
    console.log(arquivo.toString());
}
chamaArquivo();
