import express from "express";
import cors from "cors";

import weatherRoutes from "./routes/weather";

const app = express();

app.use(cors());

app.use(weatherRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.info(
    `ClimaTempo ${process.env.NODE_ENV} API running on port ${PORT}!`
  );
});

process.on("unhandledRejection", e => {
  logger.error(e);
});
