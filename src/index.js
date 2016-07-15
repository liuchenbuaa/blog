var koa = require('koa');
var views = require('koa-views');
var app = new koa();

app.use(views(__dirname + '/views',{
    map: {html: 'nunjucks'}
}));

//app.use(require('koa-bodyparser')());
require('./routes').default(app);

app.listen(3000);
