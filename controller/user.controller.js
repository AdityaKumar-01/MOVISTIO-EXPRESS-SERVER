const log = require("./../utils/logger");
const  { createUser, getUser } = require("../service/user.service");
const { omit } = require("lodash");

const createUserHandler = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

const getUserHandler = async (req, res) => {
  try {
    const user = await getUser(req.body);

    if (user["status"] == 200) res.status(200).send("User Found");
    else if (user["status"] == 404) res.status(404).send("User not found");
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

module.exports = { createUserHandler, getUserHandler };
