let express = require('express');
let router = express.Router();
let adminModel = require('../db/admin')

router.get('/islogin',function (req,res,next) {
  if (req.session.login)
    return res.json({
      code: 0,
      msg: 'ok',
      data: req.session.userInfo
    })
  else
    return res.json({
      code: 10001,
      msg: '登陆超时，请重新登陆',
      data: ''
    })
})

router.post('/register', function (req, res, next) {
  let name = req.body.username;
  if (!name || name === 'undefine')
    return res.json({
      code: 10000,
      msg: '请输入用户名'
    })
  let pass = req.body.password;
  if (!pass || pass === 'undefine')
    return res.json({
      code: 10000,
      msg: '请输入密码'
    })
  let repass = req.body.rePassword;
  if (pass !== repass)
    return res.json({
      code: 10000,
      msg: '两次密码不一致请验证输入'
    })
  adminModel.registerCheck(name,result => {
    if (result.length>0){
      return res.json({
        code: 1000,
        msg: '该用户名已注册',
        data: ''
      })
    } else {
      adminModel.register(name, pass, result1 => {
        if (result1)
          return res.json({
            code: 0,
            msg: '注册成功',
            data: ''
          })
        else {
          return res.json({
            code: 1000,
            msg: '注册失败',
            data: ''
          })
        }
      })
    }
  })

})

router.get('/user', function (req, res, next) {
  if (req.session.login)
    return res.json({
      code: 0,
      msg: 'ok',
      data: req.session.userInfo
    })
  else
    return res.json({
      code: 10001,
      msg: '登陆超时，请重新登陆',
      data: ''
    })
});
router.post('/login', function (req, res, next) {
  let name = req.body.username;
  if (!name || name === 'undefine')
    return res.json({
      code: 10000,
      msg: '请输入用户名'
    })
  let pass = req.body.password;
  if (!pass || pass === 'undefine')
    return res.json({
      code: 10000,
      msg: '请输入密码'
    })
  adminModel.login(name, pass, (result) => {
    // console.log(result)
    if (result.length > 0) {
      req.session.login = true;
      req.session.userInfo = result[0];
      req.session.isAdmin = false;
      if (parseInt(result[0].type)>0)
        req.session.isAdmin = true;
      return res.json({
        code: 0,
        msg: '登陆成功',
        data: result[0]
      })
    } else {
      return res.json({
        code: 10000,
        msg: '账号密码错误'
      })
    }
  })
});
router.get('/loginOut', function (req, res, next) {
  req.session.login = false;
  req.session.userInfo = '';
  return res.json({
    code: 0,
    msg: '退出成功',
    data: ''
  });
})
module.exports = router;
