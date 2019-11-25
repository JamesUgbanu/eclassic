import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
/**
 * Testing product endpoint
 */
describe('Test on product endpoints', () => {
  describe('Create products endpoint', () => {
    // test for when all inputs are supplied correctly
    it('should create new product when complete information is supplied', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'handy',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.success).to.equal('Product created successfully');
          done();
        });
    });
    // test for empty product name
    it('should request for product name when its not supplied', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('Product Name is required');
          done();
        });
    });
    // should check the length of product name
    it('should check the length of product name', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name:
            'handy jjjdf iojdf hjhd ijf vih kjidu ehie fi jherh kujewhuuf hndfjir ehfeiehf  grrdfgvyvyu',
          long_desc: 'jh jmlkj kk. hvhvj jij ihji',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Product name should be less than 40 char'
          );
          done();
        });
    });
    // test for any special character in product name
    it('should request for removal of special characters', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'randy =+ #@',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Product name should be alphanumeric'
          );
          done();
        });
    });
    // test if the short description is not empty
    it('should check if product description is supplied', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'handy',
          long_desc: 'jh jmlkj kk. hvhvj',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Product Description is required'
          );
          done();
        });
    });
    // test for product price
    it('should check for product price', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'handy',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 'five naira',
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('Price should be a number');
          done();
        });
    });
    // test to check quantity value
    it('should check if quantity is not empty', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'handy',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 500,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 'thirty five',
          is_active: true,
          last_updated_by: 12
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Quantity should be an number'
          );
          done();
        });
    });
    // test for last updated by
    it('should check last_updatedby is not empty', (done) => {
      request(app)
        .post('/api/v1/products')
        .send({
          prod_name: 'handy',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 5,
          image_url: 'href:oooo',
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Last updated by should have a value'
          );
          done();
        });
    });
  });
  // retrieve all products end point
  describe('retrieve all products endpoint', () => {
    it('should return all existing products', (done) => {
      request(app)
        .get('/api/v1/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.success).to.equal('Products retrieved successfully');
          done();
        });
    });
  });
});
