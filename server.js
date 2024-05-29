const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(express.static('src'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.get('/rates', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'pages', 'rates.html'))
})


app.listen(process.env.PORT, () => {
  console.log(`Server connected at port ${process.env.PORT}`)
})