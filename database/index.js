const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var uniqueValidator = require('mongoose-unique-validator');

let restaurantSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  rating: { type: Number, required: true, unique: false },
  reviewCount: { type: Number, required: true, unique: false},
  dollarRating: {type: String, required: true, unique: false},
  categories: {type: String, required: false, unique: false}
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);
restaurantSchema.plugin(uniqueValidator);

module.exports.Restaurant = Restaurant;