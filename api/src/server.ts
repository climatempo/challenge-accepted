import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});
