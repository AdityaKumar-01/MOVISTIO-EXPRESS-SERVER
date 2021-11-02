const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (input) => {
  
  try {
    let users = await UserModel.find({ userName: input["username"] });
    if (users.length > 0) {
      throw new Error("User already exists ");
    }
    return await UserModel.create(input);
  } catch (e) {

    throw new Error(e);
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
    return { data: user, status: 200 };
  } else return { data: null, status: 404 };
};

module.exports = { createUser, getUser };
