//Code adapted from: https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

//import {describe} from "mocha";

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//let users = require('/api/users/createUser');

let chai = require('chai');

let chaiHttp = require('chai-http');
let server = require('./app');
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

            var randomnumber = Date.now();
            console.log(randomnumber);
            var uname = "test"+randomnumber+"@user.com";
            console.log("Uname::"+uname);
            let user = {
                "name": "Test User"+randomnumber,
                "username": uname,
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/createUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('json');
                    res.body.length.should.be.eql(0);
                    console.log("5555\t res");
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
                "username": "",
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
                "username": "j@that.com",
                "password": "testpassword"
            };
            chai.request(server)
                .post('/api/users/createUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('Object');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
});