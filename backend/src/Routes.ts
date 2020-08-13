import { Application } from "express";

class Routes {
  /**
   * Initialize routes
   *
   * @param {Application} app
   * @memberof Routes
   */
  initRoutes(app: Application): void {
    console.log("Routes here");
  }
}

export default new Routes();
