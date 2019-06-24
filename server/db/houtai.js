let db = require('./db')

exports.comment_list = function (page,size,callback) {
  page = parseInt(page)
  size = parseInt(size)
  let start = (page-1)*size
  let sql = 'Select * from comment order by id desc limit ?,?'
  let sql2 = 'select Count(*) from comment'
  db.connection.query(sql,[start,size], function (err, result) {
    db.connection.query(sql2, function (err, result2) {
      let data = {
        data:result,
        total:result2[0]['Count(*)'],
        thisPage:page,
        size:size
      }
      callback(data)
   })
  })
}
exports.user_list = function (page,size,callback) {
  page = parseInt(page)
  size = parseInt(size)
  let start = (page-1)*size
  let sql = 'Select * from user order by id desc limit ?,?'
  let sql2 = 'select Count(*) from user'
  db.connection.query(sql,[start,size], function (err, result) {
    db.connection.query(sql2, function (err, result2) {
      let data = {
        data:result,
        total:result2[0]['Count(*)'],
        thisPage:page,
        size:size
      }
      callback(data)
   })
  })
}
exports.deletearticle = function (id, callback) {
  let sql = 'delete from article where id = ?'
  db.connection.query(sql, [id], function (err, result) {
//  console.log(id)
//  console.log(err)
//  console.log(result)
    if (err)
      callback(0)
    else
      callback(1)
  })
}
exports.deletecomment = function (id, callback) {
  let sql = 'delete from comment where id = ?'
  db.connection.query(sql, [id], function (err, result) {
//  console.log(id)
//  console.log(err)
//  console.log(result)
    if (err)
      callback(0)
    else
      callback(1)
  })
}
exports.deleteuser = function (id, callback) {
  let sql = 'delete from user where id = ?'
  db.connection.query(sql, [id], function (err, result) {
//  console.log(id)
//  console.log(err)
//  console.log(result)
    if (err)
      callback(0)
    else
      callback(1)
  })
}