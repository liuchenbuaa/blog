var router = require('koa-router')();

router.post('/list', async (ctx,next)=>{
    console.log(ctx);
    console.log("-----list2");
    ctx.body="hello world";
});

export default router;
