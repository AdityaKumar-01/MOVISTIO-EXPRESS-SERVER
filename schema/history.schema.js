const { object, tuple, string } = require("zod");

const postHistorySchema = object({
  body: object({
    username: string({
      required_error: "Username must be provided",
    }),
    searches: tuple([
      object({
        movieName: string({
          required_error: "Movie name must be provided",
        }),
        at: string({
          required_error: "Date must be provided",
        }),
      }),
    ]),
  }),
});

const getHistorySchema = object({
  params: object({
    username: string({
      required_error: "Username must be provided",
    }),
  }),
});

module.exports = { postHistorySchema, getHistorySchema };
