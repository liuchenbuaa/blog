var router = require('koa-router')();
var assert = require('assert');
var markdown = require('markdown').markdown;

var findDocuments = function(collection,offset,pagesize){
  return new Promise((resolve,reject)=>{
    collection.find({}).skip(offset).limit(parseInt(pagesize)).project({}).toArray(function(err,docs){
        if(err){
          reject(err);
        }else{
          resolve(docs);
        }
    });
  })
}

router.post('/list', async (ctx,next)=>{
    var {page = 1,pagesize = 10} = ctx.request.body;
    var offset = (page - 1) * pagesize;
    if(page && pagesize){
        var collection = ctx.mongo.collection('messages');
        var data = await findDocuments(collection,offset,pagesize);
        ctx.body = {success:true,data};
    }else{
        ctx.body = {success:false};
    }
});

router.post('/delete', async (ctx, next)=>{
    var {content,name} = ctx.request.body;
    if(content && name){
        var collection = ctx.mongo.collection('messages');
        // Insert some documents
        collection.insertMany([
          {content:content,name:name}
        ], function(err, result) {
          assert.equal(err, null);
        });
        ctx.body = {success:true};
    }else{
        ctx.body = {success:false};
    }
});

router.post('/add', async (ctx,next)=>{
    var {content,name} = ctx.request.body;
    if(content && name){
        var collection = ctx.mongo.collection('messages');
        // Insert some documents
        collection.insertMany([
          {content:content,name:name}
        ], function(err, result) {
          assert.equal(err, null);
        });
        ctx.body = {success:true};
    }else{
        ctx.body = {success:false};
    }
});

router.use('/message', router.routes(), router.allowedMethods());

export default router;
