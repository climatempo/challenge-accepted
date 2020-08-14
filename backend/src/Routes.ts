import { Application } from "express";
import localeRoute from "./routes/LocaleRoute";
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

    app.route("/api/locale").get((req, res) => {
      localeRoute.getAllLocale(req, res);
    });
  }
}

export default new Routes();
