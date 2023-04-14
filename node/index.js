const express = require('express');
const app = express();
const port = 80;

const info = {
  "message": "My name is Ely Schoenfield",
  "timestamp": new Date().getTime()
}

app.get('/', (req, res) => {
  res.json(info);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});