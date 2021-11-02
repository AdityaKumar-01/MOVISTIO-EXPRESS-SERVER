const express = require("express");
const router = express.Router();
const log = require("./utils/logger")
const {
  createUserHandler,
  getUserHandler,
} = require("./controller/user.controller");
const {
  postRatingHandler,
  getRatingHandler,
} = require("./controller/rating.controller");
const {
  postHistoryHandler,
  getHistoryHandler,
} = require("./controller/history.controller");

const { postRatingSchema, getRatingSchema } = require("./schema/rating.schema");
const { createUserSchema, getUserSchema } = require("./schema/user.schema");
const {
  getHistorySchema,
  postHistorySchema,
} = require("./schema/history.schema");
const validateResource = require("./middleware/validateResource");

router.get("/healthCheck", (req, res) => {
  res.sendStatus(200);
});

router.post(
  "/api/create-user",
  validateResource(createUserSchema),
  createUserHandler
);
router.post("/api/login-user", validateResource(getUserSchema), getUserHandler);

router.post(
  "/api/post-rating",
  validateResource(postRatingSchema),
  postRatingHandler
);
router.get(
  "/api/get-rating/:username",
  validateResource(getRatingSchema),
  getRatingHandler
);

router.get(
  "/api/get-history/:username",
  validateResource(getHistorySchema),
  getHistoryHandler
);

router.post(
  "/api/post-history",
  validateResource(postHistorySchema),
  postHistoryHandler
);

module.exports =router;
