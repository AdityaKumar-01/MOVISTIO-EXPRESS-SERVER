import { Request, Response } from "express";
import log from "./../utils/logger";

import { postRating, getRating } from "./../service/rating.service";
import { CreateRatingInput, GetRatingInput } from "./../schema/rating.schema";

export const postRatingHandler = async (
  req: Request<{}, {}, CreateRatingInput["body"]>,
  res: Response
) => {
  try {
    const response = await postRating(req.body);
    return res.send(response);
  } catch (err: any) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};

export const getRatingHandler = async (
  req: Request<GetRatingInput["params"]>,
  res: Response
) => {
  try {
    let username = req.params.username;
    let response = await getRating({ username });
    return res.send(response);
  } catch (err: any) {
    log.error(err);
    return res.send({ status: 409, data: null, msg: err.message });
  }
};
