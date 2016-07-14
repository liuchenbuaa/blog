var router = require('koa-router');

router.get('/list', async(ctx,next)=>{
    console.log("+++++list");
});

export default router;
