var server   = require('../server'),
    chai     = require('chai'),
    chaiHTTP = require('chai-http'),
    should   = chai.should();
var User = require('../components/user/model/user.model').user;
chai.use(chaiHTTP);

reqServer = process.env.HTTP_TEST_SERVER || server;

describe('Basic routes tests', function() {

    it('GET to / should return 200', function(done){
        chai.request(reqServer)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    });

    it('GET to /pagecount should return 200', function(done){
        chai.request(reqServer)
        .get('/pagecount')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    })
});
describe('Users', function() {

  describe('/GET user', function () {
    it('it should GET all users', function(done){
      chai.request(reqServer)
        .get('/user')
        .set('X-API-Key', 'root')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          done();
        })

    });

  });
  describe('/POST user', function () {
    it('it should POST a user', function(done){
      var user = {
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
      chai.request(reqServer)
        .post('/user')
        .set('X-API-Key', 'root')
        .send(user)
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        })

    });

  });

  describe('/GET/:id user', function () {
    it('it should GET a user by the given id', function(done){
      chai.request(reqServer)
        .get('/user/'+1+'')
        .set('X-API-Key', 'root')
        .end(function(err, res) {
          console.log("respuesta");
          console.log(res);
          res.should.have.status(200);
          done();
        })
    });

  });



  // it('GET to /user should return 403 if no apikey is sent', function(done){
  //   chai.request(reqServer)
  //     .get('/user')
  //     .end(function(err, res) {
  //       res.should.have.status(403);
  //       done();
  //     })
  //
  // });

});
