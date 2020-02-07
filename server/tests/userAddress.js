import request from 'supertest';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;
/**
 * Testing product endpoint
 */
let id;
describe('Test on user address endpoints', () => {
  describe('Create user address endpoint', () => {
    // test for when all inputs are supplied correctly
    it('should create new shipping address when complete information is supplied', (done) => {
      request(app)
        .post('/api/v1/users')
        .send({
          user_id: 'assddrtghh',
          first_name: 'bayo',
          last_name: 'tiamiyu',
          email: 'a@gail.com',
          address: 'tiamiyu savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          expect(res.body.message).to.equal('user address created successfully');
          done();
        });
    });
    // test for empty street address
    it('should request for first name when its not supplied', (done) => {
      request(app)
        .post('/api/v1/users')
        .send({
          user_id: 'assddrtghh',
          last_name: 'tiamiyu',
          email: 'a@gail.com',
          address: 'tiamiyu savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('First name is required');
          done();
        });
    });
    // should check the length of shipping address
    it('should check if last name is supplied', (done) => {
      request(app)
        .post('/api/v1/users')
        .send({
          user_id: 'assddrtghh',
          first_name: 'bayo',
          email: 'a@gail.com',
          address: 'tiamiyu savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'last name is required'
          );
          done();
        });
    });
    // test if city is not empty
    it('should check if email is supplied', (done) => {
      request(app)
        .post('/api/v1/users')
        .send({
          user_id: 'assddrtghh',
          first_name: 'bayo',
          last_name: 'tiamiyu',
          address: 'tiamiyu savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'email is required'
          );
          done();
        });
    });
    // test length of city
    it('should check if email supplied is valid', (done) => {
      request(app)
        .post('/api/v1/users')
        .send({
          user_id: 'assddrtghh',
          first_name: 'bayo',
          last_name: 'tiamiyu',
          email: 'www.go.com',
          address: 'tiamiyu savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal(
            'should be a valid email'
          );
          done();
        });
    });
  });
  // Test for retrieving shipping addresses
  describe('retrieve user address endpoints', () => {
    it('should return all existing addresses', (done) => {
      request(app)
        .get('/api/v1/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          id = res.body.data[0].user_id;
          expect(res.body.message).to.equal('user addresses retrieved successfully');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .get(`/api/v1/user/66`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address not found');
          done();
        });
    });
  });
  // test for updating shipping address
  describe('Update user address', () => {
    // test for when all inputs are supplied correctly
    it('should update shipping address when complete information is supplied', (done) => {
      request(app)
        .put(`/api/v1/users/${id}`)
        .send({
          first_name: 'david',
          last_name: 'tiamiyu',
          email: 'a@b.com',
          address: 'ikeja savage street',
          state: 'Lagos',
          phone: '07032716000'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('user address updated successfully');
          done();
        });
    });
    it('should return not found', (done) => {
      request(app)
        .put(`/api/v1/users/66`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address not found');
          done();
        });
    });
  });
  // remove address endpoint
  describe('remove shipping address endpoint', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/v1/user/66`)
        .set('accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('address not found');
          done();
        });
    });
    it('should remove user address by id', (done) => {
      request(app)
        .delete(`/api/v1/user/${id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('user address removed successfully');
          done();
        });
    });
  });
}); // end of test
