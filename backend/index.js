const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db')
const bodyParser = require('body-parser')

// express
//body parser
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


connectDB();