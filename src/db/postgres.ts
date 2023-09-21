import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { appConfig } from "../config";

// for migrations
const migrationClient = postgres(appConfig.postgres.url, {
  max: 1,
  ssl: "require",
});
export const runMigrations = async () => {
  migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle",
    migrationsTable: "migrations",
  });
};

// for query purposes
const queryClient = postgres(appConfig.postgres.url, { ssl: "require" });
const db: PostgresJsDatabase = drizzle(queryClient);

export { db, queryClient, migrationClient };
