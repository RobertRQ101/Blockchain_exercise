'use strict'
const {Router} = require ('express')
const router = Router ()

const root = `
  <html>
    <head>
      <style>
      body {background: # 333; margem: 1,25 rem}
      a {cor: amarelo; tamanho da fonte: 2rem; font-family: sans-serif}
      </style>
    </head>
    <body>
      <a href='/teste'> Clique aqui para ir para a rota teste </a>
    </body>
  </html>
`

router.get ('/', (req, res) => {
  res.send (root)
})

module.exports = router