{
  {
    {
      {
        var onipresencia = "em todos lugares"
      }
    }
  }
}

console.log(onipresencia)


// se a variável for declarada dentro da função, ali ela ficará embalsamada
function aprisionarVar(var_vitima){
  var cela_pertence = "senhorita Var Adams"
  console.log("a var que foi aprisionada nessa funcao foi:", var_vitima)
}

aprisionarVar("var moradora fora de função")


/* o ideal é criar variáveis dentro de funções pois elas nao receberam a
sobscrita, visto que no escopo global basta redeclara-lá, o que pode gerar diversos
problemas
*/
