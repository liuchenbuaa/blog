import post from './post'

var router = require('koa-router')();

export default function app_router(app){
    app.use(post.routes()).use(post.allowedMethods());
}
