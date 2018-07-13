const { expect } = require('chai');

describe('Our first test', () => {
  it('Should pass', (done) => {
    expect(true).to.equal(true);
    done();
  });
});
