const  mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  username: { type: String, required: true },
  searches: { type: Array, required: true },
});

const HistoryModel = mongoose.model("History", historySchema);

module.exports= HistoryModel;
