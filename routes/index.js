var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quizController');
var creditController = require('../controllers/creditController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors:[]});
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); //autoload
// Definicion rutas de /quizes
router.get('/quizes', quizController.index);
//router.get('/quizes/index', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', creditController.credit);


module.exports = router;
