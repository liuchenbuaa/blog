var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongox;
var url = 'mongodb://127.0.0.1/person';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  console.log("11111111",db);
  mongox = db;
  /*insertDocuments(db, function() {
    db.close();
  });*/
});

export default async function(ctx, next){
  console.log("222222222",mongox);
  ctx.mongo=mongox;
  console.log("3333333333",mongox);
  await next();
}
