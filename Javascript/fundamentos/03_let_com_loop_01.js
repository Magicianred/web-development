for (let i = 0; i < 10; i++){
  console.log("dentro do laço:", i)
}


// como esse i esta fora do escopo do let, ele torna-se not defined.
console.log("fora do laço", i)
