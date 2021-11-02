const log = require("./../utils/logger");

const { postRating, getRating } = require("./../service/rating.service");

const postRatingHandler = async (req, res) => {
  try {
    const response = await postRating(req.body);
    return res.send(response);
  } catch (err) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

const getRatingHandler = async (req, res) => {
  try {
    let username = req.params.username;
    let response = await getRating({ username });
    return res.send(response);
  } catch (err) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

module.exports = { postRatingHandler, getRatingHandler };
