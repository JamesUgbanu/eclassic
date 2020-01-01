import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
let currrentToken;

/**
 * testing order endpoints
 */
describe('Test order endpoints', () => {
  describe('Test for creating orders endpoints', () => {
    before((done) => {
      request(app)
        .post('/api/v1/login')
        .send({
          username: 'singlecliq@gmail.com',
          password: 'testing@123',
        })
        .end((error, response) => {
          currrentToken = response.body.token;
          done();
        });
    });
    it('should create a new order', (done) => {
      request(app)
        .post('/api/v1/orders')
        .set('Authorization', `Bearer ${currrentToken}`)
        .send({
          total_prize: 10000,
          item: {
            product_id: 6, qty: 9
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
    it('should check for items selected', (done) => {
      request(app)
        .post('/api/v1/orders')
        .set('Authorization', `Bearer ${currrentToken}`)
        .send({
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
  // Test for retrieving orders
  describe('retrieve orders endpoints', () => {
    it('should return all existing orders', (done) => {
      request(app)
        .get('/api/v1/orders')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.success).to.equal('orders retrieved successfully');
          done();
        });
    });
    it('should return all user orders', (done) => {
      request(app)
        .get('/api/v1/user/orders')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.success).to.equal('orders retrieved successfully');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .get('/api/v1/orders/206f6e92-a568-46cb-89aa-d138d1ad345a')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.error).to.equal('order not found');
          done();
        });
    });
    it('should catch error from database', (done) => {
      request(app)
        .get('/api/v1/orders/ii')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(500)
        .end((err, res) => {
          expect(res.body.status).to.equal(500);
          done();
        });
    });
  });
});
