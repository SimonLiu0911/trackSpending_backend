const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel');
const md5 = require('md5');

// 註冊
router.get('/reg', (req, res) => {
  // 響應 HTML 內容
  res.render('auth/reg');
});

router.post('/reg', (req,res) => {
  // password 加密
  const data = {
    ...req.body,
    password: md5(req.body.password)
  };
  UserModel.create(data)
    .then((result) => {
      res.render('success', {msg: '註冊成功', url: '/login'})
    })
    .catch((err) => res.status(500).send('這冊失敗'))
})

module.exports = router;