import { taskData } from "./allInterface";
import mongoose, { Schema, Document, model } from "mongoose";

interface TaskDetails extends taskData, Document {}

const taskSchema = new Schema<taskData>(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    reminder: {
      type: String,
    },
    note: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  { timestamps: true }
);

const taskModel = model<TaskDetails>("taskCollection", taskSchema);

export default taskModel;
