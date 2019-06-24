var express = require('express');
var router = express.Router();
let houtaiModel = require('../db/houtai')

router.get('/commentlist', function (req, res, next) {
  let page = req.query.page
  let size = req.query.size
  houtaiModel.comment_list(page, size,(result) => {
    return res.json({
      code: 0,
      data: result,
      msg: 'ok'
    })
  })
});
router.get('/userlist', function (req, res, next) {
  let page = req.query.page
  let size = req.query.size
  houtaiModel.user_list(page, size,(result) => {
    return res.json({
      code: 0,
      data: result,
      msg: 'ok'
    })
  })
});
router.get('/deletearticle', function (req, res, next) {
  let id = req.query.id
  houtaiModel.deletearticle(id,(result) => {
  	if(!result){
  		res.json({
      code: 1000,
      data: result,
      msg: '删除失败'
    })
  	}else{
  		res.json({
      code: 0,
      data: result,
      msg: '删除成功'
    })
  	}
  })
});
router.get('/deletecomment', function (req, res, next) {
  let id = req.query.id
  houtaiModel.deletecomment(id,(result) => {
  	if(!result){
  		res.json({
      code: 1000,
      data: result,
      msg: '删除失败'
    })
  	}else{
  		res.json({
      code: 0,
      data: result,
      msg: '删除成功'
    })
  	}
  })
});
router.get('/deleteuser', function (req, res, next) {
  let id = req.query.id
  houtaiModel.deleteuser(id,(result) => {
  	if(!result){
  		res.json({
      code: 1000,
      data: result,
      msg: '注销失败'
    })
  	}else{
  		res.json({
      code: 0,
      data: result,
      msg: '注销成功'
    })
  	}
  })
});
module.exports = router;
