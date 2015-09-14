var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Matthew Lewis' });
});

router.get('/projects', function(req, res, next) {
	res.render('projects', { title: 'Personal Projects'})
})

router.get('/reading_list', function(req, res, next) {
	res.render('reading_list', { title: 'Reading List'})
})

router.get('/error', function(req, res, next) {
	res.render('error', { title: 'Error'})
})

module.exports = router;
