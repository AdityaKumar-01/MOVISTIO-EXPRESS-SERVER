const mongoose = require("mongoose");
const log = require("./logger");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    log.info("Connected to Mongo Atlas Server");
  } catch (err) {
    log.error(`Cannot connect to DB - ${err}`);
  }
};

module.exports = connect;
