import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connect = async () => {
  try {
    await mongoose.connect(config.get<string>("DBURL"));
    log.info("Connected to Mongo Atlas Server")
  } catch (err) {
    log.error(`Cannot connect to DB - ${err}`);
  }
};

export default connect;
