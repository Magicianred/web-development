function encaixarPecaLego(tamanho_peca){
  if (tamanho_peca >= 2){
    console.log("Encaixando peça de: ", tamanho_peca, " cm ")
  }
}

encaixarPecaLego(2.1)
encaixarPecaLego(1.3)

function jogarBolinha(bola){
  if(bola){
    console.log("Jogando ", bola, "para os gatos")
  }
}

jogarBolinha() // considerado undefined(false)
jogarBolinha(null) // false
jogarBolinha(undefined) // false
jogarBolinha(NaN) // false
jogarBolinha('') // false
jogarBolinha(0) // false
jogarBolinha(-1) // true
jogarBolinha(' ') // true
jogarBolinha('?') // true
jogarBolinha([]) // true
jogarBolinha(['azul', 'verde']) // true
jogarBolinha({}) // true
jogarBolinha("bolinha verde")
