var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'POLITEKNIK' });
});

router.get('/beranda', function(req, res, next) {
  res.render('beranda', { title: 'KETAPANG' });
});

module.exports = router;
