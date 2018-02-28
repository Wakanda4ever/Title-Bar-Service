const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chompy3005');
const uniqueValidator = require('mongoose-unique-validator');

let restaurantSchema = mongoose.Schema({
  business_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  isClaimed: {
    type: Boolean,
    required: true,
    unique: false
  },
  stars: {
    type: Number,
    required: true,
    unique: false
  },
  review_count: {
    type: Number,
    required: true,
    unique: false
  },
  dollarRating: {
    type: String,
    required: true,
    unique: false
  },
  categories: [String]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema); //contains entire Yelp data for restaurants
let RestaurantInfo = mongoose.model('RestaurantInfo', restaurantSchema); //contains only the data needed for title-bar
restaurantSchema.plugin(uniqueValidator);

module.exports.Restaurant = Restaurant;
module.exports.RestaurantInfo = RestaurantInfo;