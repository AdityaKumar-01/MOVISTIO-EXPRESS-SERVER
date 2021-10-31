import { Request, Response } from "express";
import log from "./../utils/logger";

import postRating from "./../service/rating.service";
import { CreateRatingInput } from "./../schema/rating.schema";

const postRatingHandler = async (
  req: Request<{}, {}, CreateRatingInput["body"]>,
  res: Response
) => {
    try{
        const rating = await postRating(req.body);
        return res.send(rating.toJSON())
    }
    catch(err: any) {
        log.error(err)
        return res.status(409).send(err.message)
    }
};

export default postRatingHandler;