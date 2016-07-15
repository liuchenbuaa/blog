var router = require('koa-router')();

router.post('/list', async (ctx,next)=>{
    console.log(ctx);
    console.log("-----list2");
    ctx.body="hello world";
});

router.get('/post', async (ctx,next)=>{
    await ctx.render('post', {});
});

export default router;
