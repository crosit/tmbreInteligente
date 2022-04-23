import "reflect-metadata";
import { Application, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { serve, setup } from "swagger-ui-express";
import swaggerJSDocs from "swagger-jsdoc";
import { createConnection } from "typeorm";

import config from "./config/envs";
import swaggerOptions from "./swaggerOptions";

const app: Application = express();
createConnection();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

const swaggerSpecs = swaggerJSDocs(swaggerOptions);

//Routes
require("./routes/test.routes")(app);

app.get("/liveness", function (req: Request, res: Response) {
  res.status(200).send({
    success: true,
    message: "Liveness Probe"
  });
});

app.get("/readiness", function (req: Request, res: Response) {
  res.status(200).send({
    success: true,
    message: "Readiness Probe"
  });
});

app.use("/docs", serve, setup(swaggerSpecs));

app.listen(config.APP_PORT || 3010, () => {
  console.log("Service listening on port", config.APP_PORT);
});
