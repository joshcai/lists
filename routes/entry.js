var Entry = require('../models/entry')
var express = require('express');
var router = express.Router();

router.route('/entries')
  .get(function(req, res) {
    var filter = {};
    // if not logged in, only return non private entries
    if(!req.session.login) {
      filter['priv'] = false
    }
    Entry.find(filter, function(err, entries) {
      if (err) {
        return res.send(err);
      }

      res.json(entries);
    });
  })
  .post(function(req, res) {
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    var entry = new Entry(req.body);
    console.log(entry);
    Entry.findOne({ _id: entry.parent }, function(err, parent) {
      if (err) {
        return res.send(err);
      }
      if(parent.priv) {
        entry.priv = true;
      }
      entry.save(function(err) {
        if (err) {
          return res.send(err);
        }

        res.send({ message: 'Entry Added' });
      });
    })
  });

router.route('/entries/:id')
  .get(function(req, res) {
    var filter = { _id: req.params.id };
    // if not logged in, only return non private entries
    if(!req.session.login) {
      filter['priv'] = false
    }
    Entry.findOne(filter, function(err, entry) {
      if (err) {
        return res.send(err);
      }

      res.json(entry);
    });
  })
  .put(function(req,res){
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    Entry.findOne({ _id: req.params.id }, function(err, entry) {
      if (err) {
        return res.send(err);
      }

      for (prop in req.body) {
        entry[prop] = req.body[prop];
      }

      // save the entry
      entry.save(function(err) {
        if (err) {
          return res.send(err);
        }

        res.json({ message: 'Entry updated!' });
      });
    });
  })
  .delete(function(req, res) {
    if(!req.session.login) {
      return res.status(403).send('Authentication failure');
    }
    Entry.remove({
      _id: req.params.id
    }, function(err, entry) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Successfully deleted' });
    });
  });

router.route('/entries/in/:id')
  .get(function(req, res) {
    var filter = { parent: req.params.id };
    // if not logged in, only return non private entries
    if(!req.session.login) {
      filter['priv'] = false
    }
    Entry.find(filter, function(err, entries) {
      if (err) {
        return res.send(err);
      }

      res.json(entries);
    })
  });

router.route('/categories')
  .get(function(req, res) {
    var filter = { name: 'Lists' };
    // if not logged in, only return non private entries
    if(!req.session.login) {
      filter['priv'] = false
    }
    Entry.find(filter, function(err, entry) {
      if (err) {
        return res.send(err);
      }
      res.json(entry);
    });
  });

module.exports = router;
