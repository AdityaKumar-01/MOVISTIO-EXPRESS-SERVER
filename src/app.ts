import express from "express";
import config from "config";

import log from "./utils/logger";
import connect from "./utils/connect";

const app = express();

const PORT = config.get<number>("port");

app.use(express.json());

app.listen(PORT, async () => {
  log.info(`TS server started at PORT ${PORT}`);
  await connect();
});
