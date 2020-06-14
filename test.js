//Code adapted from: https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

//import {describe} from "mocha";

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//let users = require('/api/users/createUser');

let chai = require('chai');

let chaiHttp = require('chai-http');
let server = require('./index');
let should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
    /*beforeEach((done) => {
        users.remove({}, (err) => {
            done();
        });
    });*/
    describe('/POST /api/users/createUser', () => {
        it('it should POST create user', (done) => {
            let user = {
                "name": "Test User",
                "username": "test@user.com",
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/createUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('json');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    /*
    * Test the /POST route
    */
    describe('/POST /api/users/login', () => {
        it('it should not POST a user without username field', (done) => {
            let user = {
                "name": "Prom Metheus",
                "username": "prom@metheus.com",
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    //res.body.errors.should.have.property('username');
                    //res.body.errors.username.should.have.property('kind').eql('required');
                    done();
                });
        });

    });

    describe('/POST /api/users/login', () => {
        it('it should not POST a user without username field Incorrect user', (done) => {
            let user = {
                "name": "Bob Metheus",
                "username": "bob@metheus.com",
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    //res.body.errors.should.have.property('username');
                    //res.body.errors.username.should.have.property('kind').eql('required');
                    done();
                });
        });

    });

    describe('/POST /api/users/createUser', () => {
        it('it should POST create user then throw error of user already existing', (done) => {
            let user = {
                "name": "Prom Metheus",
                "username": "prom@metheus.com",
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/createUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('json');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
});