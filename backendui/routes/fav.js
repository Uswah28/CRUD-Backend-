const router = require('express').Router();
let Fav = require('../models/fav.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const image = req.body.image;
  const title = req.body.title;
  const no = req.body.no;

  const newFav = new Fav({
    image,
    title,
    no,
  });

  newFav.save()
  .then(() => res.json('Favorite added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;