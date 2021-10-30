import {object, string, TypeOf} from 'zod'

const createUserSchema = object({
  body: object({
    userName: string({
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

export type createUserInput = Omit<TypeOf<typeof createUserSchema>,"body.confirmPassword">;

export default createUserSchema
