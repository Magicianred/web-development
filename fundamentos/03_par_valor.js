const navio = "Carga" //contexto lexico: par nome + valor

function Navegar(){
  const navio = "Cargueiro" // não da conflito pois são dois escopos diferentes

}


// os objetos são grupos contendo chave:valor

const mago = {
  nome: "hypnotic",
  classe: "Sorcerer",
  wand: "Wand of dimensions",
  age: 1967,
  endereco:{
    cidade: "Liberty Bay",
  }
}

console.log(mago)
