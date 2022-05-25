const express = require('express');

const app = express();

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || 'localhost';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
