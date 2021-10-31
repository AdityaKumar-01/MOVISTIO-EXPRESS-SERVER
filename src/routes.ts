import { Express, Request, Response } from "express";
import createUserHandler from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import UserModel from "./models/user.model";
import createRatingSchema from "./schema/rating.schema";
import createUserSchema from "./schema/user.schema";
import log from "./utils/logger";
import postRatingHandler from "./controller/rating.controller";

const routes = (app: Express) => {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
  app.post("/testingZone", async (req: Request, res: Response) => {
    await UserModel.find(
      { uuid: "934520c4-d789-467e-bd4f-074aff88f5" },
      (err, data) => {
        if (data.length == 0) log.info("nothing found");
        else if (!err) log.info(data);
        else log.error(err);
      }
    );
    res.status(200).send("ok");
  });
  app.post(
    "/api/create-user",
    validateResource(createUserSchema),
    createUserHandler
  );
  app.post("/api/login-user",(req,res) => {
    validateResource(createUserSchema), createUserHandler;
  })
  app.post(
    "/api/post-rating",
    validateResource(createRatingSchema),
    postRatingHandler
  );
  
};

export default routes;
