const t = 'heyyy';

function imprime() {
  console.log(t);
}

// imprime();


function testCallback(arg1, callback) {
  console.log('Executando');
  const result = arg1 + arg1;
  return callback(new Error('OMG!!!'), result);
}

function test() {
  testCallback(1, (err, result) => {

    if(err) {
      console.log('Ooops', err)
    } else {
      console.log('Olha', result * 4);
      return result * 4;
    }
  })
}

test();

