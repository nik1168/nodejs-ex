var server = require('../server'),
  chai = require('chai'),
  chaiHTTP = require('chai-http'),
  should = chai.should();
var User = require('../components/user/model/user.model').user;
var initUser = require('../components/user/model/user.model').initUser;
chai.use(chaiHTTP);
var userTest = {
  "name": "Juan",
  "lastName": "Perez",
  "birthDate": "1994-01-26",
  "token": "er",
  "username": "jperez",
  "password": "jperez",
  "email": "jperez@gmail.com",
  "gender": "male",
  "role_id": 1,
  "image": ""
};

reqServer = process.env.HTTP_TEST_SERVER || server;

describe('Users', function () {

  describe('/GET user', function () {
    it('it should GET all users', function (done) {
      chai.request(reqServer)
        .get('/user')
        .set('X-API-Key', 'root')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.users.should.be.a('array');
          res.body.should.have.property('message');
          res.body.should.be.a('object');
          done();
        })

    });

  });
  describe('/POST user', function () {
    it('it should POST a user', function (done) {
      var user = User.build(initUser(userTest));
      chai.request(reqServer)
        .post('/user')
        .set('X-API-Key', 'root')
        .send(userTest)
        .end(function (err, res) {
          var userResponse = res.body.data;
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
          user.removeById(userResponse.id, function () {
            },
            function () {
            })
        })

    });

  });

  describe('/GET/:id user', function () {

    it('it should GET a user by the given id', function (done) {
      var user = User.build(initUser(userTest));
      user.add(function (success) {
          var userResponse = success.dataValues;
          chai.request(reqServer)
            .get('/user/' + userResponse.id + '')
            .set('X-API-Key', 'root')
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('object');
              // res.body.should.be.a('object');
              done();
              user.removeById(userResponse.id, function () {
                },
                function () {
                })
            })
        },
        function (error) {

        })

    });

  });

  describe('/PUT/:id user', function () {

    it('it should UPDATE a user given the id', function (done) {
      var user = User.build(initUser(userTest));
      user.add(function (success) {
          var userResponse = success.dataValues;
          chai.request(reqServer)
            .put('/user/' + userResponse.id + '')
            .set('X-API-Key', 'root')
            .send(userTest)
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('object');
              // res.body.should.be.a('object');
              done();
              user.removeById(userResponse.id, function () {
                },
                function () {
                })
            })
        },
        function (error) {

        })
    });

  });

  describe('/DELETE/:id user', function () {

    it('it should DELETE a user given the id', function (done) {
      var user = User.build(initUser(userTest));
      user.add(function (success) {
          var userResponse = success.dataValues;
          chai.request(reqServer)
            .delete('/user/' + userResponse.id + '')
            .set('X-API-Key', 'root')
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('object');
              // res.body.should.be.a('object');
              done();
            })
        },
        function (error) {

        })

    });

  });


  it('GET to /user should return 403 if no apikey is sent', function (done) {
    chai.request(reqServer)
      .get('/user')
      .end(function (err, res) {
        res.should.have.status(403);
        done();
      })

  });

});