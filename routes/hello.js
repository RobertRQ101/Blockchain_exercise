'use strict'
const {Router} = require ('express')
const router = Router ()

const hello = `<html>
  <head>
    <style>
     body {background: # 333; margem: 1,25 rem}
     h1 {cor: #EEE; font-family: sans-serif}
    </style>
  </head>
  <body>
    <h1> Hello World </h1>
  </body>
</html> `

router.get ('/', (req, res) => {
  res.send (hello)
})

module.exports = router