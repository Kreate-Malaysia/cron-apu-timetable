import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  // Always ask for my confirmation
  strict: true,
} satisfies Config;
