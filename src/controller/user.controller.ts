import { Request, Response } from "express";
import log from "./../utils/logger";
import createUser from "./../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
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

export default createUserHandler;
