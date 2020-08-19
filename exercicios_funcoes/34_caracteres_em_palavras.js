/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/
let string_1 = 'Camila'
let string_2 = 'Camila'
const verificaCaracter = function(string_1, string_2){
    let gera_array_char = Array.from(string_1)
        for(let i =0; i < string_2.length; i++){
            if(string_2[i] in gera_array_char){
              return true
            }
            else{
              return 'false'
            }
        }
    }


console.log(verificaCaracter(string_1, string_2))
