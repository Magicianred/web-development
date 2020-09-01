let mini_promise = new Promise(function(cumprir_promessa){
    cumprir_promessa({
        promessa_1: "oi, tudo bem ?",
        promessa_2: "sim, e com você?"
    })
})


/*
- para recuperar o retorno da funcao promise, usa o then
só retorna um parametro
- caso a promise retorne diversos valores, criar um objeto ou lista
para esse retorno e passar como para na função then
-É possível encadear os thens
*/


mini_promise.then(function(valor){
    console.log("cumprindo promessa", valor)
})
