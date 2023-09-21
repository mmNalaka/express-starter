import { lucia } from "lucia";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";

import { queryClient } from "../db/postgres";

export const auth = lucia({
  adapter: postgresAdapter(queryClient, {
    key: "user_keys",
    session: "user_sessions",
    user: "users",
  }),
  env: "DEV",
});
