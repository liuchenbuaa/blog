var router = require('koa-router')();
var assert = require('assert');
var markdown = require('markdown').markdown;

router.get('/list', async (ctx,next)=>{
    ctx.body="hello world";
});

router.post('/add', async (ctx,next)=>{
    console.log("+++++++",ctx.request.body);
    ctx.body="hello world";
});

router.use('/message', router.routes(), router.allowedMethods());

export default router;
