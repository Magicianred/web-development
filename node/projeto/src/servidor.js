const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./banco_dados')

app.use(bodyParser.urlencoded({extended: true})) //middleware

app.get('/produtos', (req, res, next) => {
  res.send(bancoDados.getProdutos())
})

app.get('/produtos/id', (req, res, next) => {
  res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.listen(porta, () =>{
  console.log(`Executando na porta ${porta}`)
})
