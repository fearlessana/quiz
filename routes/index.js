var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quizController');
var creditController = require('../controllers/creditController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', creditController.credit);


module.exports = router;
