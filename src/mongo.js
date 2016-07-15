var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongox;
var url = 'mongodb://127.0.0.1/person';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  mongox = db;
});

export default async function(ctx, next){
    ctx.mongo=mongox;
    await next();
}
