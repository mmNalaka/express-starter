import app from "./app";
import { appConfig } from "./config";
import { runMigrations } from "./db/postgres";

const port = process.env.PORT || 3001;

(async () => {
  try {
    // await runMigrations();
  } catch (error) {
    throw Error;
  }

  // Start the app
  app.listen(port, () => {
    console.info(`=================================`);
    console.info(`======= ENV: ${appConfig.nodeEnv} =======`);
    console.info(`🚀 App listening on the port ${appConfig.port}`);
    console.info(`🔗 ${appConfig.baseUrl}:${appConfig.port}`);
    console.info(`=================================`);
  });
})();
