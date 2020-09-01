const estacaoAno =  function(mes){
  switch (Math.floor(mes)){
    case 1:  case 2:  case 3:
      console.log("Verão")
      break // sem o break ele irá executar todos os switchs em cadeia
    case 4: case 5: case 6:
      console.log("Outono")
      break
    case 7: case 8: case 9:
      console.log("Inverno")
      break
    case 10: case 11: case 12:
      console.log("Primavera")
      break
    default:
      console.log("Inserir números de 1 a 12 (meses do ano)")
  }
}

estacaoAno(11)
