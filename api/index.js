const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const homeRoutes = require('./routes/home')

const port = 3000

app.use(cors({
  origin: 'http://localhost:8080'
}))

app.use('/', homeRoutes)

app.listen(port, () => {
  console.log(`Application running in port ${port}`)
})