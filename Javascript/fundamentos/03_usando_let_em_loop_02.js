const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log("dentro do laço", i)
  })
}

// tem relação com clojure
funcs[2]()
funcs[8]()
