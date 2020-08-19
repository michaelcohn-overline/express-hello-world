const express = require('express')

const app = express()
const port = parseInt(process.env.PORT || '3000', 10)

app.use(require('morgan')('dev'))

app.get('/', (_, res) => {
  res.send('Up up and away! <span class="emoji">🚀</span>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
