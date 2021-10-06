'use strict'
const {Router} = require ('express')
const router = Router ()

const teste = `
  <html>
    <head>
      <style>
      body {background: # 333; margem: 1,25 rem}
      h1 {cor: #EEE; font-family: sans-serif}
      </style>
    </head>
    <body>
      <h1> Esse é o teste da nova rota!! </h1>
    </body>
  </html> 
`


router.get ('/', (req, res) => {
  res.send (teste)
})

module.exports = router