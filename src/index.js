var koa = require('koa');
var app = koa();

require('./routes').default(app);

app.listen(3000);
