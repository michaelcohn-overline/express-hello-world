const express = require('express')

const app = express()
const port = parseInt(process.env.PORT || '3000', 10)

app.use(require('morgan')('dev'))

app.get('/', (_, res) => {
  res.send('Hello, World!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
