import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

const createUser = async (
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  try {
    let users = await UserModel.find({userName:input["userName"]})
    if(users.length > 0) {
      throw new Error("User already exists ")
    }
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};

export default createUser;
