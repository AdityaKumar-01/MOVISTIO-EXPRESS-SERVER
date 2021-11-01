import { TypeOf, object, tuple, string, date } from "zod";

export const postHistorySchema = object({
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

export const getHistorySchema = object({
  params: object({
    username: string({
      required_error: "Username must be provided",
    }),
  }),
});

export type PostHistoryInput = TypeOf<typeof postHistorySchema>;
export type GetHistoryInput = TypeOf<typeof getHistorySchema>;
