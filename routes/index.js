var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res) {
  var loggedIn = (req.session.login ? true : false);
  res.render('index', { loggedIn: loggedIn });
});

router.route('/login')
  .get(function(req, res) {
    res.render('login');
  })
  .post(function(req, res) {
    if(config.password == req.body.password) {
      req.session.login = true;
      res.redirect('/');
    }
    else {
      res.redirect('/login');
    }
  });

router.get('/logout', function(req, res) {
  req.session.login = false;
  res.redirect('/');
})

module.exports = router;
