const log = require("./../utils/logger");
const  { createUser, getUser } = require("../service/user.service");
const { omit } = require("lodash");

const createUserHandler = async (req, res) => {
  try {
    const response = await createUser(req.body);
    return res.send(response);
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

const getUserHandler = async (req, res) => {
  try {
    const response = await getUser(req.body);
    return res.send(response)
  } catch (e) {
    return res.status(409).send(e.message);
  }
};

module.exports = { createUserHandler, getUserHandler };
