const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
  res.send({nome:'Great mana potion', preco: 255}) // converte direto pra json
})


app.listen(porta, () =>{
  console.log(`Executando na porta ${porta}`)
})
