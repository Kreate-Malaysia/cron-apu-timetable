import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { env } from "@/env";

export const client = createClient({
  url: env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client);
