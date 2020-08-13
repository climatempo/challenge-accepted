import * as http from "http";
import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import App from "./App";
import { Context } from "./Context";
import localeService from "./services/LocaleService";
import weatherService from "./services/WeatherService";

process.env.TZ = "UTC";

const server = http.createServer(App);

/**
 * Initial procedures
 *
 */
async function init() {
  await localeService.importFileContentToDatabase();
  await weatherService.importFileContentToDatabase();
}

getConnectionOptions()
  .then(async options => {
    return createConnection({
      ...options,
      migrationsRun: true,
    });
  })
  .then(async connection => {
    Context.createContext({ app: App, connection });

    await init();

    const port = process.env.PORT ?? "8000";

    server.listen(parseInt(port, 10));
    server.on("listening", () => console.log(`\nServer running on ${port}`));
    server.on("error", (error: NodeJS.ErrnoException) => console.log(`An error has occurred: ${error}`));
  })
  .catch(error => console.error(error));
