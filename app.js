const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Bem Vindo ao Chat!')
  })
  
  app.listen(port, () => {
    console.log(`Iniciando o servidor com express na porta 3000:${port}`)
  })