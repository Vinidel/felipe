function hello(req, res) {
  console.log('Tamo aqui');
  res.status(200).json({message: 'Olha que legal'})
}

module.exports = hello;