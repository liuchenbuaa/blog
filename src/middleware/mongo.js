var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

console.log("11111");
var db;
var url = 'mongodb://127.0.0.1/person';
console.log("222222");

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var db = db;
  /*insertDocuments(db, function() {
    db.close();
  });*/
  console.log("333333");
});

console.log("4444444");

export default async function(ctx, next){
  console.log("5555555");
  ctx.mongo=db;
  await next();
  console.log("66666666");
}
