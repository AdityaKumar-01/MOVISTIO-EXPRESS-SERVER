require("dotenv").config();
export default {
  port: 8000,
  DBURL: process.env.DB_URL,
  saltWorkFactor: process.env.SALT,
};
