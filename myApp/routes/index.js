var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/admin', function (req, res, next) {
  res.render('pages/admin');
});

router.get('/login', function (req, res, next) {
  res.render('pages/login');
});

router.get('/signup', function (req, res, next) {
  res.render('pages/signup');
});

router.post('/login', function (req, res, next) {
  res.render('pages/admin');
});

module.exports = router;
