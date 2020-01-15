import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
let currrentToken;
let unauthorizedToken;
/**
 * Testing product endpoint
 */
describe('Test on product endpoints', () => {
  describe('Create products endpoint', () => {
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
    // test for when all inputs are supplied correctly
    it('should create new product when complete information is supplied', (done) => {
      request(app)
        .post('/api/v1/products')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.message).to.equal('Product created successfully');
          done();
        });
    });
    // test for empty product name
    it('should request for product name when its not supplied', (done) => {
      request(app)
        .post('/api/v1/products')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
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
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('Price should be a number');
          done();
        });
    });
    // test to check quantity value
    it('should check if quantity is not empty', (done) => {
      request(app)
        .post('/api/v1/products')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 'thirty five',
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Quantity should be an number'
          );
          done();
        });
    });
  });
  // update existing product
  describe('Update existing products endpoint', () => {
    // test for when all inputs are supplied correctly
    it('should update existing product when complete information is supplied', (done) => {
      request(app)
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
        .send({
          prod_name: 'new bayo',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('product updated successfully');
          done();
        });
    });
    // test for non-existing product
    it('should check if product exist', (done) => {
      request(app)
        .put('/api/v1/products/70')
        .set('Authorization', `Bearer ${currrentToken}`)
        .send({
          prod_name: 'new bayo',
          long_desc: 'jh jmlkj kk. hvhvj',
          short_desc: 'cdkn kjhk  nnn',
          discount: 20,
          coupons: {
            blackfriday: 12334,
            v1: 'edo'
          },
          sku_id: 'S001',
          price: 3000,
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
          expect(res.body.message).to.equal('product not found');
          done();
        });
    });
    // test for empty product name
    it('should request for product name when its not supplied', (done) => {
      request(app)
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
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
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
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
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 35,
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('Price should be a number');
          done();
        });
    });
    // test to check quantity value
    it('should check if quantity is not empty', (done) => {
      request(app)
        .put('/api/v1/products/1')
        .set('Authorization', `Bearer ${currrentToken}`)
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
          image_url: {0:'test.jpg',1:'test2.png'},
          available_color: { back: 'blue', front: 'white' },
          quantity: 'thirty five',
          is_active: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'Quantity should be an number'
          );
          done();
        });
    });
  });
  // retrieve products end points
  describe('retrieve products endpoint', () => {
    it('should return all existing products', (done) => {
      request(app)
        .get('/api/v1/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('Products retrieved successfully');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .get('/api/v1/product/200')
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('product not found');
          done();
        });
    });
    it('should catch error from database', (done) => {
      request(app)
        .get('/api/v1/product/ii')
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.status).to.equal(500);
          done();
        });
    });
    it('should return a single product', (done) => {
      request(app)
        .get('/api/v1/product/1')
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('product retrieved successfully');
          done();
        });
    });
  });
  // remove product endpoint
  describe('remove products endpoint', () => {
    before((done) => {
      request(app)
        .post('/api/v1/login')
        .send({
          username: 'lonadekonline@gmail.com',
          password: 'testing@123',
        })
        .end((error, response) => {
          unauthorizedToken = response.body.token;
          done();
        });
    });
    it('should return insufficient role', (done) => {
      request(app)
        .delete('/api/v1/product/200')
        .set('Authorization', `Bearer ${unauthorizedToken}`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(401)
        .end((err, res) => {
          expect(res.body.message).to.equal('Insufficient role');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .delete('/api/v1/product/200')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('product not found');
          done();
        });
    });
    it('should remove product by id', (done) => {
      request(app)
        .delete('/api/v1/product/1')
        .set('Authorization', `Bearer ${currrentToken}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('product removed successfully');
          done();
        });
    });
  });
}); // end of test
