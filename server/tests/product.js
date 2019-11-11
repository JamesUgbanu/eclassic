import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
/**
 * Testing product endpoint
 */
describe('PRODUCT CONTROLLER', () => {
  it('it should add a new product with correct and complete information', (done) => {
    request(app)
      .post('/api/v1/product')
      .send({
        productName: 'Gucci',
        shortDescription: 'Gucci is the best',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.success).to.be.equal('Product created successfully');
        done();
      });
  });
   it('it should not add a new product with correct when product name is empty', (done) => {
    request(app)
      .post('/api/v1/product')
      .send({
        productName: '',
        shortDescription: 'Gucci is the best',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.errors[0].msg).to.be.equal('Product Name is required');
        done();
      });
  });
});
