const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000
const mongoose = require('mongoose');

const hello = require('./handlers/hello');
const hi = require('./middlewares/hi');
const productList = require('./handlers/productList');

//Isso vai quebrar se vc nao tiver mongodb rodando local
mongoose
  // .connect(`mongodb://node-shop:${process.env.MONGO_ATLAS_PW}@node-rest-shop-shard-00-00-vwzbq.mongodb.net:27017,node-rest-shop-shard-00-01-vwzbq.mongodb.net:27017,node-rest-shop-shard-00-02-vwzbq.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin`)
  .connect(`mongodb://localhost/node-shop`)
  .then(() => console.log('Success'))
  .catch(err => console.log('Not connected to DB', err.errors[0].err));

app.use((req, res, next) => {
  console.log('Middleware');
  next();
})

app.get('/products', productList);

app.get('/hello', hello);
app.get('/hi', hi, (req, res) => {
  console.log('Tamo aqui');
  res.status(200).json({message: 'Olha que legal denovo'})
});

server.listen(port, (err) => {
  if(err) {
    console.log('Error', err)
  }

  console.log(`App started on port ${port}`)
});
