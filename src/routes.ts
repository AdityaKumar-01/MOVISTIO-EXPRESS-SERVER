import { Express, Request, Response } from "express";

import {
  createUserHandler,
  getUserHandler,
} from "./controller/user.controller";
import {
  postRatingHandler,
  getRatingHandler,
} from "./controller/rating.controller";

import UserModel from "./models/user.model";
import { createRatingSchema, getRatingSchema } from "./schema/rating.schema";
import { createUserSchema, getUserSchema } from "./schema/user.schema";

import validateResource from "./middleware/validateResource";
import log from "./utils/logger";

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
    validateResource(createRatingSchema),
    postRatingHandler
  );
  app.get(
    "/api/get-rating/:username",
    validateResource(getRatingSchema),
    getRatingHandler
  );
};

export default routes;
