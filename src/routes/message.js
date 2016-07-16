var router = require('koa-router')();
var assert = require('assert');
var markdown = require('markdown').markdown;

router.post('/list', async (ctx,next)=>{
    var {page = 1,pagesize = 10} = ctx.request.body;
    var offset = (page - 1) * pagesize;
    if(page && pagesize){
        var collection = ctx.mongo.collection('messages');
        collection.find([
          {}
        ], {limit:pagesize,skip:offset} ,function(err, result) {
            assert.equal(err, null);
            console.log(result);
        });
        ctx.body = {success:true};
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
