function magicSkill(){
  this.skill = 0

  setInterval(function (){
    this.skill++
    console.log(this.skill)
  }.bind(this), 1000)
}

new magicSkill

/*
Duas formas de declarar a qual objeto esta se referindo
*/

function distanceSkill(){
  this.skill = 0

  const self = this // se refere ao this do escopo


  setInterval(function (){
    self.skill++
    console.log(self.skill)
  }, 1000)
}

new distanceSkill
