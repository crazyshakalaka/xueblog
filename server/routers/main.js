let express = require('express');
let router = express.Router();
let mainModel = require('../db/main')


router.get('/articlelist', function (req, res, next) {
  let page = req.query.page
  let size = req.query.size
  let classify = req.query.classify
  if (!classify || classify === 'undefine')
    classify = null
  mainModel.article_list(page, size, classify,(result) => {
    return res.json({
      code: 0,
      data: result,
      msg: 'ok'
    })
  })
});
router.get('/articleDeil',function (req,res,next){
	let id =req.query.id
  mainModel.articleDeil(id,(result) =>{
		return res.json({
			code:0,
			data:result,
			msg:'ok'
		})
	})
});
router.get('/articleclassify',function (req,res,next){
	let cl =req.query.classify
  mainModel.articleclassify(cl, (result) => {
    return res.json({
      code: 0,
      data: result,
      msg: 'ok'
    })
  })
});
router.post('/Messagein', function (req, res, next) {
  let name = req.body.username;
  if (!name || name === 'undefine')
    return res.json({
      code: 10000,
      msg: '评论不能为空'
    })
  let vie = req.body.review;
  if (!vie || vie === 'undefine')
    return res.json({
      code: 10000,
      msg: '昵称不能为空'
    })
  mainModel.Messagein(name,vie,result => {
      return res.json({
			code:0,
			data:result,
			msg:'ok'
      })
  })
})
router.post('/AddArticle', function (req, res, next) {
  let cl = req.body.classify;
  if (!cl || cl === 'undefine')
    return res.json({
      code: 10000,
      msg: '分类不能为空'
    })
  let ti = req.body.title;
  if (!ti || ti === 'undefine')
    return res.json({
      code: 10000,
      msg: '标题不能为空'
    })
  let dev = req.body.decd;
  if (!dev || dev === 'undefine')
    return res.json({
      code: 10000,
      msg: '文章简介不能为空'
    })
   let co = req.body.content;
  if (!co || co === 'undefine')
    return res.json({
      code: 10000,
      msg: '文章内容不能为空'
    })
   mainModel.AddArticle(dev,ti,cl,co,result => {
     return res.json({
       code:0,
       data:result,
       msg:'ok'
     })
  })
})
router.post('/updateArticle', function (req, res, next) {
  let id = req.body.id;
  if (!id || id === 'undefine')
    return res.json({
      code: 10000,
      msg: '请选择文章'
    })
  let cl = req.body.classify;
  if (!cl || cl === 'undefine')
    return res.json({
      code: 10000,
      msg: '分类不能为空'
    })
  let ti = req.body.title;
  if (!ti || ti === 'undefine')
    return res.json({
      code: 10000,
      msg: '标题不能为空'
    })
  let dev = req.body.decd;
  if (!dev || dev === 'undefine')
    return res.json({
      code: 10000,
      msg: '文章简介不能为空'
    })
  let co = req.body.content;
  if (!co || co === 'undefine')
    return res.json({
      code: 10000,
      msg: '文章内容不能为空'
    })
  mainModel.updateArticle(id,dev,ti,cl,co,result => {
    if (result)
      return res.json({
        code:0,
        data:result,
        msg:"修改成功"

      })
    else
      return res.json({
        code:155,
        data:result,
        msg:'修改失败'
      })
  })
})
router.get('/Comment',function (req,res,next){
	let  name=req.query.name
	let  rev = req.query.review
	let  tim = req.query.time
//		let idct = req.query.id
  mainModel.Comment(name,rev,tim,(result) =>{
		return res.json({
			code:0,
			data:result,
			msg:'ok'
		})
		console.log(result)
	})
});
module.exports = router;
