console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// todos terão o atributo .prototype porque todos são funções e todas funções possuem esse atributo

String.prototype.reverse = function(){
  return this.split("").reverse().join("")
}

console.log("Camila".reverse())

Array.prototype.first = function(){
  return this[0]
}


console.log(["camila", "clovis", "ryuk", "nicolas"].first())
