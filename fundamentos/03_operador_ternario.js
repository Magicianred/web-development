
/* operador ternário '?'
esse exemplo equivale a condição if nota >= return aprovado, else reprovado
essa é a forma usando arrow onde as condições foram compactadas
variavel recebendo um parametro (por isso ta sem os parenteses, se fossem
mais parametros teria de por os parenteses), expressao , condicao true, condicao false
operador ternario ? unindo duas condições
*/
const resultado = nota => nota >= 7 ? 'aprovado': 'reprovado'
console.log(resultado(9))
