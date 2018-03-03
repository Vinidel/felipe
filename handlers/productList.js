const Product = require('../models/product');

function productList(req, res) {
  Product
   .find()
   .exec()
   .then(products => {
     res.status(200).json(products);
   })
   .catch(err => {
     res.status(500).json({message: 'Error'})
   })
}

module.exports = productList;