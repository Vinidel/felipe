function hi(req, res, next) {
  console.log('Olha outro middlewre');
  res.status(400).json({message: 'Bad request'})
  next();
} 

module.exports = hi;