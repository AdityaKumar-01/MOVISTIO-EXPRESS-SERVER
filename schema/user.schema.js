const { object, string } = require("zod");

const createUserSchema = object({
  body: object({
    username: string({
      required_error: "Username required",
    }),
    password: string({
      required_error: "Password required",
    }).min(6, "Password too short - should be at least 6 characters"),
    confirmPassword: string({
      required_error: "Confirm Password required",
    }),
  }).refine((data) => data.password == data.confirmPassword, {
    message: "Confirm password dont match password",
    path: ["confirmPassword"],
  }),
});

const getUserSchema = object({
  body: object({
    username: string({
      required_error: "Username required",
    }),
    password: string({
      required_error: "Password required",
    }),
  }),
});

module.exports = { createUserSchema, getUserSchema };
