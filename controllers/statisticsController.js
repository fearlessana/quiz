var models = require('../models/models.js');


//GET /quizes/statistics
exports.index = function(req, res){
  var stats = {
    questionsNum: 0,
    commentsNum: 0,
    commentsAvg: 0,
    questionsWithoutComments: 0,
    questionsWithComments: 0
  };
  
  models.Quiz.count().then( function(count) { 
    stats.questionsNum = count || 0;
    models.Quiz.count({distinct: 'Quiz.id', include: [{model: models.Comment, required: true}]})
    .then(function(count) { 
      stats.questionsWithComments = count || 0;
      models.Comment.count()
      .then(function(count) {
  stats.commentsNum = count || 0;
  stats.questionsWithoutComments = stats.questionsNum - stats.questionsWithComments;
  stats.commentsAvg = (stats.commentsNum / (stats.questionsNum || 1)).toFixed(2); 
      })
      .then( function() {
  //console.log(JSON.stringify(stats));
  res.render('quizes/statistics', {stats: stats, errors: []});
      });
    })
  }).catch( function(error){ 
    res.render('quizes/statistics', {stats: stats, errors: [error]});
  });
}; 