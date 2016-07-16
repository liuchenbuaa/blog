var koa = require('koa');
var views = require('koa-views');
var serve = require('koa-static');

var app = new koa();

app.use(views(__dirname + '/views',{
    map: {html: 'nunjucks'}
}));

app.use(require('./mongo').default);

require('./routes').default(app);

console.log("++++++++++++++",__dirname + '/../node_modules/bootstrap');

app.use(serve(__dirname + '/../node_modules/bootstrap'));
app.use(serve(__dirname + '/styles'));

app.listen(3000);
