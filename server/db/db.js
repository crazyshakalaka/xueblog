let mysql = require('mysql');

let mysqlConfig = {
  host: 'cdb-gbq2lq69.gz.tencentcdb.com',  // 新建数据库连接时的 主机名或ID地址 内容
  // host: 'localhost',  // 新建数据库连接时的 主机名或ID地址 内容
  user: 'xue',
  password: '(Xue)2019', // root 密码
  database: 'xue', // 数据库名
  port: '10004'
  // port: '3306'
}
exports.connection = mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
});


