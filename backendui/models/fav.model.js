const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  no: { type: String, required: true },
}, {
  timestamps: true,
});

const Fav = mongoose.model('Fav', favSchema);

module.exports = Fav;