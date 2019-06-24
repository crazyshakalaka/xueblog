let db = require('./db')

exports.register = function (name, pwd,callback) {
  let sql = 'INSERT INTO user(username, password) VALUES (?, ?)'
  db.connection.query(sql,[name,pwd], function (err, result) {
    // db.connection.end();
    callback(result)
  })
}
exports.registerCheck = function (name,callback) {
  let sql = 'Select * from user where username=? limit 1'
  db.connection.query(sql, [name], (err, result) => {
    // db.connection.end();
    // console.log(err)
    callback(result)
  })
}

exports.login = function (name, pwd,callback) {
  let sql = 'Select * from user where username=? and password=? limit 1'
  db.connection.query(sql, [name, pwd], (err, result) => {
    // db.connection.end();
    // console.log(err)
    callback(result)
  })
}
