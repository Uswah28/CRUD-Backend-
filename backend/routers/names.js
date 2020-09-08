const router = require('express').Router();
let Name = require('../models/name.model');

router.route('/').get((req, res) => {
  Name.find()
    .then(name => res.json(name))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newName = new Name({name});

  newName.save()
    .then(() => res.json('Name added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;