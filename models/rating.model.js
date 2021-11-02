const  mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  ratings: { type: Array, required: true },
});

const RatingModel = mongoose.model("Rating", ratingSchema);

module.exports= RatingModel;
