const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();




app.use('/', express.static(path.join(__dirname, './../client/dist')));

app.get('/api/test', (req, res) => {
  // res.status(200).send(data); //ok
  res.status(404).end(); //not found
});

app.post('/api/test', (req, res) => {
  // res.status(201).end(); //created
  res.status(404).end();

});

app.put('/api/test', (req, res) => {
  // res.status(200).end(); //ok
  // res.status(204).end(); //no content
  res.status(404).end(); //not found
});

app.delete('/api/test', (req, res) => {
  // res.status(200).end(); //ok
  res.status(404).end(); //not found
});

app.listen(port, ()=> (console.log('listening to port: ', port)));
