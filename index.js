const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Salom, dunyo!');
});

app.listen(3000, () => {
  console.log('Server http://localhost:3000 da ishga tushdi');
});
