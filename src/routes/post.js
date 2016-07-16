var router = require('koa-router')();
var assert = require('assert');
var markdown = require('markdown').markdown;

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

router.get('/markdown', async (ctx,next)=>{
    console.log("+++markdown called");
    var md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.";
    ctx.body = markdown.toHTML(md_content);
});

router.get('/bootstrap', async (ctx,next)=>{
    await ctx.render('index',{});
})

export default router;
