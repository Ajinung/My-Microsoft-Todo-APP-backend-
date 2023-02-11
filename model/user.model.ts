import { userDetails } from "./allInterface";
import mongoose, { Schema, model, Document } from "mongoose";

interface userData extends userDetails, Document {}

const userSchema = new Schema<userDetails>({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
  },
  myDay: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taskCollection",
    },
  ],
  planned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taskCollection",
    },
  ],
  important: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taskCollection",
    },
  ],
  assigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taskCollection",
    },
  ],
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taskCollection",
    },
  ],
});

const userModel = model<userData>("userCollection", userSchema);

export default userModel;
