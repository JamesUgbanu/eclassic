import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
/**
 * Testing product endpoint
 */
let id;
describe('Test on shipping endpoints', () => {
  describe('Create shippings endpoint', () => {
    // test for when all inputs are supplied correctly
    it('should create new shipping address when complete information is supplied', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan express way',
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.message).to.equal('shipping address created');
          done();
        });
    });
    // test for empty street address
    it('should request for street address when its not supplied', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('address is required');
          done();
        });
    });
    // should check the length of shipping address
    it('should check the length of street address', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: `km 34, lagos-ibadan express way uhniofe ihjiohjedf ihijddeij pop ihde djo ihndojcdodkm 
          lagos-ibadan express way uhniofe ihjiohjedf ihijddeij pop ihde djo ihndojcdod`,
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'address should be less than 100 char'
          );
          done();
        });
    });
    // test if city is not empty
    it('should check if city is supplied', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'city is required'
          );
          done();
        });
    });
    // test length of city
    it('should check if city is less thn 50 char', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          city: 'jnkvn ojojpodfpd nfkfjkpo  pojmilfjvmf fojklfjf hnhbnikbj',
          address: 'km 34, lagos-ibadan',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'city should be less than 50 char'
          );
          done();
        });
    });
    // test for state
    it('should check if state is supplied', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'state is required'
          );
          done();
        });
    });
    // test length of state
    it('should check if state is less thn 50 char', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          state: ' hvvbkjn jbjk,hjnok hjbkhjn jbnl hvjbnk bjbknk uygvcyjcvugg yfughih',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'state should be less than 50 char'
          );
          done();
        });
    });
    // test for phone
    it('should check if phone is supplied', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan',
          city: 'IDBFactory',
          state: 'ogun',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'phone is required'
          );
          done();
        });
    });
    // test length of phone
    it('should check if phone is is less thn 12 char', (done) => {
      request(app)
        .post('/api/v1/shippings')
        .send({
          customer_id: 'fffiij4566j4',
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999dbbfdfnfff'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'phone should be less than 12 char'
          );
          done();
        });
    });
  });
  // Test for retrieving shipping addresses
  describe('retrieve shippings endpoints', () => {
    it('should return all existing addresses', (done) => {
      request(app)
        .get('/api/v1/shippings')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          id = res.body.data[0].shipping_id;
          expect(res.body.message).to.equal('shipping addresses retrieved');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .get(`/api/v1/shipping/66`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address not found');
          done();
        });
    });
    it('should catch error from database', (done) => {
      request(app)
        .get('/api/v1/shipping/ii')
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(500)
        .end((err, res) => {
          expect(res.body.status).to.equal(500);
          done();
        });
    });
  });
  // test for updating shipping address
  describe('Update shippings endpoint', () => {
    // test for when all inputs are supplied correctly
    it('should update shipping address when complete information is supplied', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan express way',
          city: 'ikeja',
          state: 'ogun',
          phone: '0099889900'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address updated successfully');
          done();
        });
    });
    // test for empty street address
    it('should request for street address when its not supplied', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('address is required');
          done();
        });
    });
    // should check the length of shipping address
    it('should check the length of street address', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: `km 34, lagos-ibadan express way uhniofe ihjiohjedf ihijddeij pop ihde djo ihndojcdodkm 
          lagos-ibadan express way uhniofe ihjiohjedf ihijddeij pop ihde djo ihndojcdod`,
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'address should be less than 100 char'
          );
          done();
        });
    });
    // test if city is not empty
    it('should check if city is supplied', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'city is required'
          );
          done();
        });
    });
    // test length of city
    it('should check if city is less thn 50 char', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          city: 'jnkvn ojojpodfpd nfkfjkpo  pojmilfjvmf fojklfjf no ohgij vbukknhvj',
          address: 'km 34, lagos-ibadan',
          state: 'ogun',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'city should be less than 50 char'
          );
          done();
        });
    });
    // test for state
    it('should check if state is supplied', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'state is required'
          );
          done();
        });
    });
    // test length of state
    it('should check if state is less thn 50 char', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          state: ' hvvbkjn jbjk,hjnok hjbkhjn jbnl hvjbnk bjbknk ccvbujk dfguhi hhiuytgfdfgh',
          phone: '2345566999'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'state should be less than 50 char'
          );
          done();
        });
    });
    // test for phone
    it('should check if phone is supplied', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan',
          city: 'IDBFactory',
          state: 'ogun',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'phone is required'
          );
          done();
        });
    });
    // test length of phone
    it('should check if phone is less thn 12 char', (done) => {
      request(app)
        .put(`/api/v1/shippings/${id}`)
        .send({
          address: 'km 34, lagos-ibadan',
          city: 'ibafo',
          state: 'ogun',
          phone: '2345566999dbbfdfnfff'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'phone should be less than 12 char'
          );
          done();
        });
    });
  });
  // remove address endpoint
  describe('remove shipping address endpoint', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/v1/shipping/66`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address not found');
          done();
        });
    });
    it('should remove address by id', (done) => {
      request(app)
        .delete(`/api/v1/shipping/${id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address removed successfully');
          done();
        });
    });
  });
}); // end of test
