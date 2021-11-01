import mongoose from "mongoose";

export interface HistoryDocument extends mongoose.Document{
    username: string;
    searches: Array<object>
}

const historySchema  = new mongoose.Schema({
    username:{type:String, required:true},
    searches:{type: Array, required:true}
})

const HistoryModel = mongoose.model("Histry", historySchema);

export default HistoryModel;