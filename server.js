const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("hello, my name is camila");
});

app.get('/today', (req, res) => {
  res.send("Today is tuesday!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});