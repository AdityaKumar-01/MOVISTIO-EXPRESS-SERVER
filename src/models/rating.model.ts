import mongoose from "mongoose";

export interface RatingDocument extends mongoose.Document{
    username: string;
    ratings: Array<object>;
}

const ratingSchema = new mongoose.Schema(
    {
        username:{ type: String, required: true}, 
        ratings:{type: Array,required: true},
    }
)

const RatingModel = mongoose.model('Rating', ratingSchema);

export default RatingModel;