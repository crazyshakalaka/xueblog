const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
let session = require('express-session');
//加载数据库模块
// var db = require('mysql');

//app.get('/api/user/register',req,res,next)=>{
//	res.json
//}
app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60 * 1000 * 30}
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/admin',require('./routers/admin'));
app.use('/api/houtai',require('./routers/houtai'));
app.use('/api',require('./routers/main'));

app.listen(3000);
//console.log('success listen at port:3000....');
//
// db.connect('mysql://cdb-gbq2lq69.gz.tencentcdb.com:10004/xue',function(err){
// 	if(err){
// 		console.log('数据库连接失败');
// 	}else{
// 		console.log('数据库连接成功');
// 		app.listen(3000);
// 	}
// });
// console.log('success listen at port:3000....');
