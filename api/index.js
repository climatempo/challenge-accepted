import app from "./config/appConfig";
import routes from "./router/v1";

app.use("/api", routes);

export default app;
