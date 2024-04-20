import "dotenv/config";
import { resolve } from "node:path";
import { db } from "./index";
import { migrate } from "drizzle-orm/libsql/migrator";
(async () => {
  await migrate(db, {
    migrationsFolder: resolve(__dirname, "../../../drizzle"),
  });
})();
