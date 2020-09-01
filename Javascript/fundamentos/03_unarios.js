let bolos = 1
let docinhos = 2

bolos++
console.log(bolos)
--bolos // prioridade maior em relação ++ pois é a forma prefixada recebe a prioridade
console.log(bolos)
console.log(++bolos === docinhos--)// le o operado prefixado ++, realiza a compara e só depois reduz de docinhos, tornando a expressão true no momento da comparação
