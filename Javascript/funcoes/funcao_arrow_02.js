/* o this dentro da função arrow é constante
*/

function jogarRuna(){
  this.runa = 0

  setInterval(() => {
    this.runa++
    console.log(this.runa)
  }, 1000)
}

new jogarRuna
