var Category = require('../models/category')
var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });


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
