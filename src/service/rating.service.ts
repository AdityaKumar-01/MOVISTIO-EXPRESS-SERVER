import { DocumentDefinition } from "mongoose";
import RatingModel, { RatingDocument } from "../models/rating.model";

export const postRating = async (input: DocumentDefinition<RatingDocument>) => {
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
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getRating = async (
  input: DocumentDefinition<Omit<RatingDocument, "ratings">>
) => {
  try {
    let ratings = await RatingModel.find({ username: input.username });

    if (ratings.length == 1)
      return { status: 200, data: ratings[0].ratings, msg: "OK" };
    else
      return { status: 404, data: null, msg: "User hasn't given any ratings" };
  } catch (err: any) {
    throw new Error(err);
  }
};
