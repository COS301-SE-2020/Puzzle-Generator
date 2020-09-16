const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
//const app = require('./app');
const should = chai.should();
//const should = require('should');
const expect = chai.expect;
const puzzleListMock = require('./mocks/puzzles/puzzle_list.json');
const userLoginMock = require('./mocks/users/user_login.json');
const userOneMock = require('./mocks/users/user_one.json');
const userUsernameMock = require('./mocks/users/user_username.json');
const userRenameMock = require('./mocks/users/user_rename.json');
const userPuzzlesMock = require('./mocks/users/user_puzzles.json');
const userCreatedMock = require('./mocks/users/user_created.json');
const puzzleOneMock = require('./mocks/puzzles/puzzle_one.json');
const puzzleRatingsMock = require('./mocks/puzzles/puzzle_ratings.json');
const puzzleSearchMock = require('./mocks/puzzles/puzzle_search.json');
const User = require('./models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Puzzle = require('./models/Puzzle');


describe('POST /users/login', () => {
  it('should login a user when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/users/login')
      .send({
        'username': 'charlo@test.com',
        'password': 'charlotest'
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.deep.equal(userLoginMock);
        done();
      });
  });
});

describe('PUT /users/resetPassword', () => {
  it('should reset a users password', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .put('/api/users/resetPassword')
      .send({
        'username': 'demo@user.com',
        'password': 'demouser'
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('POST /users/getUser', () => {
  it('should return a user', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/users/getUser')
      .send({
        "token": "CgOOiUKmqqPyOlhFjDZth",
      })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(userOneMock);
        done();
      });
  });
});

describe('PUT /users/updateName', () => {
  it('should update a users name', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .put('/api/users/updateName')
      .send({
        "name": "First User",
        "token": "CgOOiUKmqqPyOlhFjDZth"
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.deep.equal(userRenameMock);
        done();
      });
  });
});

describe('PUT /users/updateUsername', () => {
  it('should update a users username', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .put('/api/users/updateUsername')
      .send({
        "username": "demo@user.com",
        "token": "CgOOiUKmqqPyOlhFjDZth"
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.deep.equal(userUsernameMock);
        done();
      });
  });
});

describe('GET /puzzles/getAllPuzzles', () => {
  it('should return a list of puzzles when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .get('/api/puzzles/getAllPuzzles')
      .end((err, res) => {
        res.should.have.status(201);
        //console.log(res.body);
        //expect(res.body).to.deep.equal(puzzleListMock);
        done();
      });
  });
});

describe('POST /users/getPuzzlesByUser', () => {
  it('should return a list of puzzles made by a user when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/users/getPuzzlesByUser')
      .send({
        "token": "CgOOiUKmqqPyOlhFjDZth"
      })
      .end((err, res) => {
        res.should.have.status(201);
        //console.log(res.body);
        //expect(res.body).to.deep.equal(userCreatedMock);
        done();
      });
  });
});

describe('GET /puzzles/getAllPuzzleRatings', () => {
  it('should return a list of puzzle ratings when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .get('/api/puzzles/getAllPuzzleRatings')
      .end((err, res) => {
        res.should.have.status(200);
        //expect(res.body).to.deep.equal(puzzleRatingsMock);
        done();
      });
  });
});

describe('GET /puzzles/getPuzzleByID', () => {
  it('should return a specific puzzle when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .get('/api/puzzles/getPuzzleByID/1')
      .end((err, res) => {
        res.should.have.status(201);
        //console.log(res.body);
        //expect(res.body).to.deep.equal(puzzleOneMock);
        done();
      });
  });
});

describe('GET /puzzles/getSearchedPuzzles', () => {
  it('should return puzzles that match the search term when called', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .get('/api/puzzles/getSearchedPuzzles/Puzzle')
      .end((err, res) => {
        res.should.have.status(201);
        //console.log(res.body);
        //expect(res.body).to.deep.equal(puzzleSearchMock);
        done();
      });
  });
});

describe('POST /users/getPuzzleRatingsByUser', () => {
  it('should get puzzles rated by a user', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/users/getPuzzleRatingsByUser')
      .send({
        "token": "N7Xp4ovUZKw_5Gbra959l"
      })
      .end((err, res) => {
        res.should.have.status(201);
        //console.log(res.body);
        //expect(res.body).to.deep.equal(userPuzzlesMock);
        done();
      });
  });
});

describe('POST /puzzles/createPuzzleRating', () => {
  it('should add a puzzle rating', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/puzzles/createPuzzleRating')
      .send({
        "puzzleID": 2,
        "token": "CgOOiUKmqqPyOlhFjDZth",
        "rating": 3
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});


describe('POST /users/createUser', () => {
  it('should create a user', done => {
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/users/createUser')
      .send({
        "name": "Jenny Doe",
        "username": "jenny@doe.com",
        "password": "jennydoe"
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
      User.destroy( { raw: true, where: { username: {[Op.like]:  "jenny@doe.com" } } } )
  });
});

describe('POST /puzzles/createPuzzle', () => {
  it('should create a puzzle', done => {
    const httpOptions = { headers: { 'Content-Type': 'application/json' }};
    chai
      .request('https://prometheuspuzzles.herokuapp.com')
      .post('/api/puzzles/createPuzzle')
      .send({
          "name": "testPuzzle",
          "description": "A test puzzle",
          "puzzleObject": "{",
          "shared": false,
          "image": "data:",
          "token": "CgOOiUKmqqPyOlhFjDZth"
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
      Puzzle.destroy( { where: { name: {[Op.like]:  "testPuzzle" } } } )
  });
});
