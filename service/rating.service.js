const RatingModel = require("../models/rating.model");

const postRating = async (input) => {
  try {
    let users = await RatingModel.find({ username: input["username"] });
    if (users.length == 0) {
      const user = await RatingModel.create(input);
      return { status: 201, data: user, msg: "OK" };
    } else {
      const user = await RatingModel.findOneAndUpdate(
        { username: input["username"] },
        { $push: { ratings: input["ratings"] } }
      );
      return { status: 200, data: user, msg: "OK" };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getRating = async (input) => {
  try {
    let ratings = await RatingModel.find({ username: input.username });

    if (ratings.length == 1)
      return { status: 200, data: ratings[0].ratings, msg: "OK" };
    else
      return { status: 404, data: null, msg: "User hasn't given any ratings" };
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = { postRating, getRating };
