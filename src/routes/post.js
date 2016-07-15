var router = require('koa-router')();
var assert = require('assert');

router.post('/list', async (ctx,next)=>{
    console.log(ctx);
    console.log("-----list2");
    ctx.body="hello world";
});

router.get('/post', async (ctx,next)=>{
    await ctx.render('post', {});
});

router.get('/index', async (ctx,next)=>{
    console.log("+++++++",ctx.mongo);
    var collection = ctx.mongo.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 3}, {a : 4}, {a : 5}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the document collection");
      //callback(result);
    });
    await ctx.render('post', {});
});

export default router;
