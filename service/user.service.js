const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (input) => {
  try {
    let users = await UserModel.find({ username: input["username"] });
    if (users.length > 0) {
      return { data: input, status: 409, msg: "User already exists" };
    }
    const user = await UserModel.create(input);
    return { data: user, status: 201, msg: "OK" };
  } catch (e) {
    return { data: input, status: 409, msg: "User already exists" };
  }
};

const getUser = async (input) => {
  let user = await UserModel.find({
    username: input["username"],
  });
  if (
    user.length == 1 &&
    bcrypt.compareSync(input["password"], user[0].password)
  ) {
    return { data: user, status: 200, msg: "OK" };
  } else return { data: null, status: 404, msg: "User not found" };
};

module.exports = { createUser, getUser };
