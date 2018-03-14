const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;
const app = express();

app.get('/', (req, res, next) => {
  res.sendfile(path.join(__dirname, './lib/index.html'));
});

app.listen(port, (err) => {
  if(err){
    console.error(err);
    return;
  }

  open('http://localhost:' + port);
});
