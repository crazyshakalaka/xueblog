let db = require('./db')

exports.article_list = function (page, size, classify, callback) {
  page = parseInt(page)
  size = parseInt(size)
  let start = (page - 1) * size
  let sql = 'Select * from article order by id desc limit ?,?'
  let sql2 = 'select Count(*) as count  from article'
  let where = [start, size]
  let where2 = []
  if (classify) {
    sql = 'Select * from article where classify= ? order by id desc limit ?,?'
    sql2 = 'select Count(*) as count from article where classify= ?'
    where.unshift(classify)
    where2.push(classify)
  }
  db.connection.query(sql, where, function (err, result) {
    db.connection.query(sql2, where2, function (err2, result2) {
      let data = {
        data: result,
        total: result2[0]['count'],
        thisPage: page,
        size: size
      }
      callback(data)
    })
  })
}
exports.articleDeil = function (id, callback) {
  let sql = 'Select * from article where id = ?'
  db.connection.query(sql, [id], function (err, result) {
    if (result.length > 0)
      callback(result[0])
    else
      callback([])
  })
}
exports.articleclassify = function (article, callback) {
  let sql = 'SELECT classify ,COUNT(1) as count FROM article GROUP BY classify'
  db.connection.query(sql, [article], function (err, result) {
    callback(result)
  })
}
exports.Messagein = function (name, viw, callback) {
  let sql = 'INSERT INTO comment(username, review,time) VALUES (?, ?,Now())'
  db.connection.query(sql, [name, viw], function (err, result) {
    // db.connection.end();
    callback(result)
  })
}

exports.AddArticle = function (decd, title, classify, content, callback) {
  let sql = 'INSERT INTO article(decd,title,classify,content,class_id,create_time,author) VALUES (?, ?, ?, ?, 1,NOW(),"薛")'
  db.connection.query(sql, [decd, title, classify, content], function (err, result) {
    // db.connection.end();
    callback(result)
  })
}

exports.updateArticle = function(id,decd, title, classify, content, callback){
  let sql = "update article set decd=?,title=?,classify=?,content=? where id =?"
  db.connection.query(sql,[decd,title,classify,content,id] ,function (err, result) {
    console.log(err)
    if (err)
      callback && callback(0)
    else
      callback && callback(1)
  })
}
exports.Comment = function (nam, re, ti, callback) {
  let sql = 'Select username,review,time from comment'
  db.connection.query(sql, [nam, re, ti], function (err, result) {
    if (result.length > 0)
      callback(result)
    else
      callback([])
  })
}
