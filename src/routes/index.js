import post from './post';
import message from './message';

var router = require('koa-router')();

export default function app_router(app){
    app.use(post.routes()).use(post.allowedMethods());
    app.use(message.routes()).use(message.allowedMethods());
}
