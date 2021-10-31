import mongoose from "mongoose";

export interface RatingDocument extends mongoose.Document{
    userName: string;
    ratings: Array<object>;
}

const ratingSchema = new mongoose.Schema(
    {
        userName:{ type: String, required: true}, 
        ratings:{type: Array,required: true},
    }
)

const RatingModel = mongoose.model('Rating', ratingSchema);

export default RatingModel;