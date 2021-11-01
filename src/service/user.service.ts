import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import bcrypt from "bcrypt";
import config from "config";
import log from "./../utils/logger";

export const createUser = async (
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  try {
    let users = await UserModel.find({ userName: input["userName"] });
    if (users.length > 0) {
      throw new Error("User already exists ");
    }
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getUser = async (
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  let user = await UserModel.find({
    userName: input["userName"],
  });
  if (
    user.length == 1 &&
    bcrypt.compareSync(input["password"], user[0].password)
  ) {
    return { data: user, status: 200 };
  } else return { data: null, status: 404 };
};
