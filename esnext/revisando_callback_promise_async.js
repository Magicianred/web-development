/*
Funções que dependem de outras retornos para seguirem adiante são sincronas.
Funções assincronas enviam a requisicao de processamento, porém, não dependem do
resultado desse processamento para seguirem adiante.
--------------------------------------------------------------------------------
CALLBACK: funcões de callback requisitam o processamento para verificar se
 ele foi feito ou não, por isso recebe dois parâmetros, o erro e o conteúdo do
 processamento. O erro é tratado, e o conteudo também, conforme necessidade do
 sistema.
 Exemplo de função CALLBACK:

        function callback(erro, conteudo){
            console.log(erro, conteudo)
    }
     chamando a funcao de callback:
     fs.readFile('./abc.txt', callback)

Pode facilmente gerar um 'callback hell' para dar leitura/ dar manutenção.
Esse código vai crescer pra frente (hadouken), e o ideal é ele crescer para baixo.
--------------------------------------------------------------------------------
PROMISE: declara ja informando o que deve ser retornado

const readFile = file => new Promise(resolve_promessa, rejeita_promessa) => {
    fs.readFile(file, (err, contents) =>{
    if(err){
    rejeita_promessa(err)
}else{
    resolve_promessa(contents)
    }
    })
})
readFile('./abc.txt').then(null, contents => {
console.log(String(contents))
})
--------------------------------------------------------------------------------
ASYNC/AWAIT
(é uma promise só muda um pouco a sintaxe)


const init = async() =>{
const contents = await readFile('./abc.txt')
console.log(String(contents))
}

console.log("init", init)

*/
