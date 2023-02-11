import express, { Application } from "express";
import { dbConnect } from "../config/db";
import { appConfig } from "./app";

const port: number | string = process.env.port || 2000;
const app: Application = express();

//instantiating middlewares
appConfig(app);
dbConnect();

const server = app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
