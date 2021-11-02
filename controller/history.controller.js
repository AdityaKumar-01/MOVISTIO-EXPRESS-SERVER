const log = require("./../utils/logger");

const { postHistory, getHistory } = require("../service/history.service");
const postHistoryHandler = async (req, res) => {
  try {
    const response = await postHistory(req.body);
    res.send(response);
  } catch (err) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

const getHistoryHandler = async (req, res) => {
  try {
    let username = req.params.username;
    const response = await getHistory({ username });
    res.send(response);
  } catch (err) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

module.exports = { postHistoryHandler, getHistoryHandler };
