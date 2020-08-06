/* As chaves são opcionais no if, porém, caso elas não sejam declaradas, apenas
o primeiro bloco de código após o if é considerado
*/

function tomarAgua(volume){
  if(volume >=10)
    console.log("tomando " + volume + " mL de água") // essa sentença esta relacionada ao if

  console.log("segundo bloco") // essa sentença não tem relação com o if. Sempre será executado
}


// tomarAgua(1000)
// tomarAgua(13)


function medirVolume(valor){
  if (valor > 2)
  ;  // esta imprimindo tudo porque a sentença esta encerrando no ;
    //  desta forma, associada a uma sentença vazia. Não usar com as estruturas de controle
  { console.log(valor)}
}

medirVolume(1)
