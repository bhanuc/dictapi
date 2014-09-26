var koa = require('koa');
var app = koa();


app.use(function *(next){
    this.type = 'json';
    this.status = 200;
    this.body = {'Welcome': 'This is a level 2 Hello World Application!!'};
});

if (!module.parent) app.listen(3000);
console.log('Hello World is Running on http://localhost:3000/');