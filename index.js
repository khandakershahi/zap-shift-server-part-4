const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()


// middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Zap-Shift is running')
})

app.listen(port, () => {
  console.log(`Zap-Shift app listening on port ${port}`)
})
