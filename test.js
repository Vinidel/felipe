const {expect} = require('chai')
const multiplyBy2 = require('./multiply');
const testinho = require('./testinho');

describe('mocha test', () => {
  it('should return 6 as the result', () => {
    expect(multiplyBy2(3)).to.equal(6);
  })

  it('should test something', () => {
    expect(testinho()).to.equal('1')
  })
})