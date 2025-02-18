import request from 'supertest';
import app from '../src/app.js'; // Your Express app
import User from '../src/models/user.js';
import sinon from 'sinon';
import bcrypt from 'bcrypt';
import {expect} from 'chai'
describe('User Sign Up', () => {
  
  it('should return 400 if username, password or email is missing', async () => {
    const res = await request(app)
      .post('/signup') // Assuming your signup route is /signup
      .send({ username: 'user1' }); // Missing password and email

    expect(res.status).to(400);
    expect(res.body.message).to('fill all required field');
  });

  it('should return 400 if user already exists', async () => {
    // Mocking existing user in the database
    const existingUser = { username: 'user1' };
    sinon.stub(User, 'findOne').resolves(existingUser);

    const res = await request(app)
      .post('/signup')
      .send({ username: 'user1', password: 'password123', email: 'user1@example.com' });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('user already exists');

    sinon.restore(); // Restore original method
  });

  it('should successfully create a new user', async () => {
    // Mock the bcrypt.hash method
    sinon.stub(bcrypt, 'hash').resolves('hashedPassword');

    // Mock the save method for User model
    const saveStub = sinon.stub().resolves(true);
    sinon.stub(User.prototype, 'save').callsFake(saveStub);

    const res = await request(app)
      .post('/signup')
      .send({ username: 'user1', password: 'password123', email: 'user1@example.com' });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('successfully used data save while signup');
    expect(saveStub.calledOnce).toBe(true);

    sinon.restore();
  });

  it('should return 500 if there is an internal server error', async () => {
    // Simulating an error when saving the user
    sinon.stub(User.prototype, 'save').throws(new Error('Database error'));

    const res = await request(app)
      .post('/signup')
      .send({ username: 'user1', password: 'password123', email: 'user1@example.com' });

    expect(res.status).toBe(500);
    expect(res.body.message).toContain('internal server error');

    sinon.restore();
  });
});


describe('User Login', () => {

    it('should return 400 if username or password is missing', async () => {
      const res = await request(app)
        .post('/login') // Assuming your login route is /login
        .send({ username: 'user1' }); // Missing password
  
      expect(res.status).toBe(400);
      expect(res.body.message).toBe('enter all required data field');
    });
  
    it('should return 401 if invalid credentials', async () => {
      // Mocking the user lookup to return null (invalid credentials)
      sinon.stub(User, 'findOne').resolves(null);
  
      const res = await request(app)
        .post('/login')
        .send({ username: 'user1', password: 'wrongpassword' });
  
      expect(res.status).toBe(401);
      expect(res.body.message).toBe('invalid credentials');
  
      sinon.restore(); // Restore original method
    });
  
    it('should return 200 if valid credentials', async () => {
      // Mocking valid user data
      const user = { username: 'user1', password: 'hashedPassword' };
      sinon.stub(User, 'findOne').resolves(user);
      sinon.stub(bcrypt, 'compare').resolves(true); // Simulate successful password match
  
      const res = await request(app)
        .post('/login')
        .send({ username: 'user1', password: 'password123' });
  
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('valid credentials');
  
      sinon.restore();
    });
  
    it('should return 500 if there is an internal server error', async () => {
      // Simulating an error in the login process
      sinon.stub(User, 'findOne').throws(new Error('Database error'));
  
      const res = await request(app)
        .post('/login')
        .send({ username: 'user1', password: 'password123' });
  
      expect(res.status).toBe(500);
      expect(res.body.message).toContain('Internal Server Error');
  
      sinon.restore();
    });
  });