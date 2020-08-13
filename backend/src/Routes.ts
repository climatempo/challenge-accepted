import { Application } from "express";
import weatherRoute from "./routes/WeatherRoute";

class Routes {
  /**
   * Initialize routes
   *
   * @param {Application} app
   * @memberof Routes
   */
  initRoutes(app: Application): void {
    app.route("/api/weather/:cityName").get((req, res) => {
      weatherRoute.getWeather(req, res);
    });
  }
}

export default new Routes();
