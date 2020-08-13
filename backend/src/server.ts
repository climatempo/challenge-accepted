import * as http from "http";
import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import App from "./App";
import { Context } from "./Context";

process.env.TZ = "UTC";

const server = http.createServer(App);

getConnectionOptions()
  .then(async options => {
    return createConnection({
      ...options,
      migrationsRun: true,
    });
  })
  .then(connection => {
    Context.createContext({ app: App, connection });

    const port = process.env.PORT ?? "8000";

    server.listen(parseInt(port, 10));
    server.on("listening", () => console.log(`Server running on ${port}`));
    server.on("error", (error: NodeJS.ErrnoException) => console.log(`An error has occurred: ${error}`));
  })
  .catch(error => console.error(error));
