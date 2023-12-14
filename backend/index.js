const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')

// app.use((req, res, next)=> {
//   res.setHeader("Access-Control-ALlow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers",
//   "Orgin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })
app.use(cors());
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


connectDB();