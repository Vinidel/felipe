function myPromiseResolve() {
  return new Promise((resolve, reject) => {
    request((err, data) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  })
};

function request(callback) {
  return callback(new Error('Oloko'), {id: 1, name: 'Felipe'});
}

myPromiseResolve()
  .then(data => console.log('Heyyy', data))
  .catch(err => console.log(err));



//Exemplo
function returnObj() {
  return {
    id: '1',
    name: 'Felipe'
  }
}

const {id, name} = returnObj();