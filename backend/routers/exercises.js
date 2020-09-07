const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const religion = req.body.religion;
  const date = Date.parse(req.body.date);
  const email = req.body.email;
  const number = req.body.number;
  const nationality = req.body.nationality;
  

  const newExercise = new Exercise({
    name,
    address,
    religion,
    date,
    email,
    number,
    nationality,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;