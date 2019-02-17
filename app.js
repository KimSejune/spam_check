const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Root Router');
});


app.listen('3000', () => {
  console.log('Server Start')
});