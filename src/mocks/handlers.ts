import { rest } from "msw"
import { users } from "../utils/mocks/users"

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users))
  }),
]
