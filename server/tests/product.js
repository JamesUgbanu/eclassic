import request from 'supertest';
import app from '../../app';


/**
 * Testing product endpoint
 */
describe('PRODUCT CONTROLLER', () => {
  it('it should add a new product with correct and complete information', (done) => {
    request(app)
      .post('/api/v1/product')
      .send({
        productName: 'Update website',
        shortDescription: 'Remove content from header and place it below',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        done();
      });
  });
});
