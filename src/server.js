import express from "express";
import bodyParser from "body-parser";
import { appConfig } from "./config/app.config.js";
import { mongo } from "./db/mongo.db.js";
import router from "./routes/index.routes.js";
import { ErrorHandlerMiddleware } from "./middlewares/error-handler.middleware.js";

const app = express();

process.on("uncaughtException", (err) => {
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  process.exit(1);
});

await mongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.all("*", (_, res) => {
  res.status(404).send({
    message: "Url is not found",
  });
});

app.use(ErrorHandlerMiddleware);

app.listen(appConfig.port, appConfig.host, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
