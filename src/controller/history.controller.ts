import { Request, Response } from "express";
import log from "./../utils/logger";

import { GetHistoryInput, PostHistoryInput } from "../schema/history.schema";
import { postHistory, getHistory } from "../service/history.service";
export const postHistoryHandler = async (
  req: Request<{}, {}, PostHistoryInput["body"]>,
  res: Response
) => {
  try {
    const response = await postHistory(req.body);
    res.send(response);
  } catch (err: any) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

export const getHistoryHandler = async (
  req: Request<GetHistoryInput["params"]>,
  res: Response
) => {
  try {
    let username = req.params.username;
    const response = await getHistory({ username });
    res.send(response);
  } catch (err: any) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};
