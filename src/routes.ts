import { Express, Request, Response } from "express";

import {
  createUserHandler,
  getUserHandler,
} from "./controller/user.controller";
import {
  postRatingHandler,
  getRatingHandler,
} from "./controller/rating.controller";
import {
  postHistoryHandler,
  getHistoryHandler,
} from "./controller/history.controller";

import { postRatingSchema, getRatingSchema } from "./schema/rating.schema";
import { createUserSchema, getUserSchema } from "./schema/user.schema";
import { getHistorySchema, postHistorySchema } from "./schema/history.schema";
import validateResource from "./middleware/validateResource";


const routes = (app: Express) => {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post(
    "/api/create-user",
    validateResource(createUserSchema),
    createUserHandler
  );
  app.post("/api/login-user", validateResource(getUserSchema), getUserHandler);

  app.post(
    "/api/post-rating",
    validateResource(postRatingSchema),
    postRatingHandler
  );
  app.get(
    "/api/get-rating/:username",
    validateResource(getRatingSchema),
    getRatingHandler
  );

  app.get(
    "/api/get-history/:username",
    validateResource(getHistorySchema),
    getHistoryHandler
  );

  app.post(
    "/api/post-history",
    validateResource(postHistorySchema),
    postHistoryHandler
  );
};

export default routes;
