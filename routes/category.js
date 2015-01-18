var Category = require('../models/category')
var express = require('express');
var router = express.Router();

router.route('/categories')
  .get(function(req, res) {
    Category.find(function(err, categories) {
      if (err) {
        return res.send(err);
      }

      res.json(categories);
    });
  })
  .post(function(req, res) {
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    var category = new Category(req.body);
    console.log(req.body);

    category.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Category Added' });
    });
  });

router.route('/categories/:id')
  .get(function(req, res) {
    Category.findOne({ _id: req.params.id}, function(err, category) {
      if (err) {
        return res.send(err);
      }

      res.json(category);
    });
  })
  .put(function(req,res){
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    Category.findOne({ _id: req.params.id }, function(err, category) {
      if (err) {
        return res.send(err);
      }

      for (prop in req.body) {
        category[prop] = req.body[prop];
      }

      // save the category
      category.save(function(err) {
        if (err) {
          return res.send(err);
        }

        res.json({ message: 'Category updated!' });
      });
    });
  })
  .delete(function(req, res) {
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    Category.remove({
      _id: req.params.id
    }, function(err, category) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
