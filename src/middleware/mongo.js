var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var db;
var url = 'mongodb://127.0.0.1/person';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var db = db;
  /*insertDocuments(db, function() {
    db.close();
  });*/
});

export default async function(ctx, next){
  ctx.mongo=db;
  await next();
}
