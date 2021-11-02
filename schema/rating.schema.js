const { object, tuple, number, string } = require("zod");


const postRatingSchema = object({
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

const getRatingSchema = object({
  params: object({
    username: string({
      required_error: "Username required",
    }),
  }),
});

module.exports = { postRatingSchema, getRatingSchema };
