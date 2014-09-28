
var request = require('supertest');
var api = require('../index.js');

describe('GET all', function(){
  it('should respond with all the words', function(done){
    var app = api;
    request(app.listen())
    .get('/v1/all')
    .query({ word: 'new' })
    .set('Accept-Encoding', 'gzip')    
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  })
})

describe('GET /v1/single', function(){
  it('should respond with a single result', function(done){
    var app = api;

    request(app.listen())
    .get('/v1/single')
    .query({ word: 'new' })
    .set('Accept-Encoding', 'gzip')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res){
    if (err) throw err;
    else {
        if (!('_id' in res.body)) return "missing id";
    if (!('word' in res.body)) throw new Error("missing word");
        done();
    }
  });
  })
})