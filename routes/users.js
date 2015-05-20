module.exports = router;
var express = require('express');
var router = express.Router();
var path = require('path');
var token = require('../model/token');

/* GET users listing. */
router.get('/stats', function(req, res, next) {
  console.log("Getting stats");
  return token.find({}, null, function(err, data){
    res.send(data);
  });
});

router.post('/add', function(req, res, next){
  console.log(req.body);
  token.create(req.body, function(err, data){
    if (err) {
      console.log(err);
      next(err);
    }
    console.log("new token", data);
  });
});

router.delete('/:id', function(req, res, next) {
  token.findByIdAndRemove(req.params.id, req.body, function (err, token) {
    if (err) return next(err);
    res.json(token);
    console.log("delete")
  });
});
module.exports = router;