const levelRequerido = [1, 3, 4, 5, 6, 7, 8, 9, 10]


// sem callback

let levelBaixo = []

for(let i in levelRequerido){
  if(levelRequerido[i] <= 5){
    levelBaixo.push(levelRequerido[i])
  }else{
    'level acima de 5'
  }
}

console.log("1", levelBaixo)

// com callback
const levelBaixo_2 =  levelRequerido.filter(function(levelRequerido){
  return levelRequerido <= 5
})

console.log("2", levelBaixo_2)

// callback + arrow

levelBaixo_3 = levelRequerido.filter(levelRequerido => levelRequerido <= 5)
console.log("3", levelBaixo_3)
