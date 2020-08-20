/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/
let string_1 = 'Camila'
let string_2 = 'Siberia'

const verificaCaracter = function(string_1, string_2){
    let array_string_1 = string_1.toLowerCase().split("")
    let array_string_2 = string_2.toLowerCase().split("")

    conta_char = 0
    for(let i = 0; i < array_string_2.length; i++){
        if(array_string_1.includes(array_string_2[i])){
          conta_char++
        }
      }if(conta_char == array_string_2.length){
          return true
      }else{
          return false
      }
}


console.log(verificaCaracter(string_1, string_2))
