import { Request, Response } from "express";
import log from "./../utils/logger";
import { createUser, getUser } from "./../service/user.service";
import { createUserInput, getUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export const createUserHandler = async (
  req: Request<{}, {}, createUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

export const getUserHandler = async (
  req: Request<{}, {}, getUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await getUser(req.body);

    if (user["status"] == 200) res.status(200).send("User Found");
    else if (user["status"] == 404) res.status(404).send("User not found");
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};
