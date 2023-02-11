import express, { Application } from "express";
import cors from "cors";
import router from "../routes/user.routes";

const app: Application = express();

export const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())

    //routes
    .use("/api", router);
};
