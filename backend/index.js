const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello backend from beadando-devops!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend fut: http://localhost:${PORT}`);
});
