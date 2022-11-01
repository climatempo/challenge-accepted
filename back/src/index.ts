import { config } from "dotenv";
import express from "express";
import localesRouter from "./routes/locales";
import weatherRouter from "./routes/weather";

config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(weatherRouter);
app.use(localesRouter);

app.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
