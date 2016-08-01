var mongoose = require('mongoose');


var clubSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  address: String,
  website: String,
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model("Club", clubSchema);