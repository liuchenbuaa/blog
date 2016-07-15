var koa = require('koa');
var app = new koa();

app.use(require('koa-bodyparser')());
require('./routes').default(app);

app.listen(3000);
