const HistoryModel = require("../models/history.model");

const postHistory = async (input) => {
  try {
    let histories = await HistoryModel.find({ username: input.username });
    if (histories.length == 0) {
      const history = await HistoryModel.create(input);
      return { status: 201, data: history, msg: "OK" };
    } else {
      const history = await HistoryModel.findOneAndUpdate(
        { username: input["username"] },
        { $push: { searches: input["searches"] } }
      );
      return { status: 200, data: history, msg: "OK" };
    }
  } catch (e) {
    throw new Error(e);
  }
};

const getHistory = async (input) => {
  try {
    let histories = await HistoryModel.find({ username: input.username });

    if (histories.length == 1)
      return { status: 200, data: histories[0].searches, msg: "OK" };
    else
      return {
        status: 404,
        data: null,
        msg: "User hasn't searched anything",
      };
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = { postHistory, getHistory };
