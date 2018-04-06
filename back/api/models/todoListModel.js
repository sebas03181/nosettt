'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HotelSchema = new Schema({
  name: { type: String },
  stars: { type: Number },
  price: { type: Number },
  image: { type: String },
  amenities: { type: String }
});

module.exports = mongoose.model('Hotels', HotelSchema);
