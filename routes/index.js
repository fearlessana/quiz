var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
/* GET author page. 
router.get('/author', function(req, res) {
  res.render('author', { title: 'Ana CC' });
});*/

module.exports = router;
