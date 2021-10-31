import {DocumentDefinition} from "mongoose";
import RatingModel, { RatingDocument } from "../models/rating.model";


const postRating =  async (input:DocumentDefinition<RatingDocument>) =>{
    try{
         let users = await RatingModel.find({userName:input["userName"]})
        if(users.length == 0){
            return await RatingModel.create(input)
        }
        else{ 
            return await RatingModel.findOneAndUpdate({userName:input["userName"]},{$push: {ratings:input["ratings"]}})
        }
    }
    catch(error: any){
        throw new Error(error)
    }
}

export default postRating;