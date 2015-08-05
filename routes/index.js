var express = require('express');
var router = express.Router();
var argv = require('yargs').argv;
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res) {
  var loggedIn = (req.session.login ? true : false);
  res.render('index', { loggedIn: loggedIn, title: 'Lists' });
});

router.route('/login')
  .get(function(req, res) {
    if(argv.d) {
      req.session.login = true;
      res.redirect('/');
    }
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
