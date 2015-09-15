var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Matthew Lewis' });
});

router.get('/error', function(req, res, next) {
	res.render('error', { title: 'Error'})
})

module.exports = router;
