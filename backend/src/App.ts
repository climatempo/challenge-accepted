import * as bodyParser from "body-parser";
import * as express from "express";
import * as morgan from "morgan";
import routes from "./Routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  middleware(): void {
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.router(this.express);

    // Secret used by JWT
    this.express.set("secret", "s3cr3t");
  }

  private router(app: express.Application): void {
    routes.initRoutes(app);
  }
}
export default new App().express;
