import { object, tuple, number, TypeOf, string } from "zod";

export const createRatingSchema = object({
  body: object({
    username: string({
      required_error: "Username required",
    }),
    ratings: tuple([
      object({
        movieName: string({
          required_error: "Movie name required",
        }),
        rating: number({ required_error: "Rating required" })
          .max(10, "Rating cannot be greater than 10")
          .min(0, "Rating cannot be lower than 0"),
      }),
    ]),
  }),
});

export const getRatingSchema = object({
  params: object({
    username: string({
      required_error: "Username required",
    }),
  }),
});
export type CreateRatingInput = TypeOf<typeof createRatingSchema>;
export type GetRatingInput = TypeOf<typeof getRatingSchema>;
