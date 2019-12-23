import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;

/**
 * testing order endpoints
 */
describe('Test order endpoints', () => {
  it('should create a new order', (done) => {
    request(app)
      .post('/api/v1/orders')
      .send({
        customer_id: 'adebayo 3',
        total_prize: 10000,
        item: {
          product_id: 1, qty: 5
        }
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.success).to.equal('order created successfully');
        done();
      });
  });
  it('should check for custumer id', (done) => {
    request(app)
      .post('/api/v1/orders')
      .send({
        total_prize: 10000,
        item: {
          product_id: 1, qty: 5
        }
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.errors[0].msg).to.equal('customer id is required');
        done();
      });
  });
  it('should check for items selected', (done) => {
    request(app)
      .post('/api/v1/orders')
      .send({
        customer_id: 'adebayo 3',
        total_prize: 10000,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.errors[0].msg).to.equal('no item selected');
        done();
      });
  });
});
