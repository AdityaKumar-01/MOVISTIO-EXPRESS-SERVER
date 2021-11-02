const express = require("express");
const bodyParser= require("body-parser")
const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/connect");
const log = require("./utils/logger");

const PORT = process.env.PORT || 8000;


app.use(express.json());
app.listen(PORT, async () => {
  log.info(`TS server up and running at localhost port ${PORT}`);
  await connect();
  const route = require("./routes");
  app.use("/", route);
});
