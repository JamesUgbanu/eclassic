import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;

/**
 * Testing user endpoint
 */
describe('Test on user endpoints', () => {
  describe('Test for invalid login details', () => {
    it('should return Wrong email or password.',(done) => {
      request(app)
        .post('/api/v1/login')
        .send({
          username: 'singlecliq@gmail.com',
          password: 'testing@12',
        })
        .end((err, res) => {
          expect(res.body.error).to.equal('Wrong email or password.');
          done();
        });
    });
  });
});
// end of test
