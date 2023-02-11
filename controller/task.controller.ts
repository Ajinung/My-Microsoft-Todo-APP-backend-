import { Request, Response } from "express";
import mongoose from "mongoose";
import userModel from "../model/user.model";
import taskModel from "../model/task.model";

const getTask = async (req: Request, res: Response) => {
  await taskModel.find();
  res.status(200).json({
    message: `found`,
  });
};
