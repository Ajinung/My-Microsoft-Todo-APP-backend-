import { Router } from "express";
import {
  AssignTask,
  completeTask,
  createTask,
  getOneTask,
  uncompletedTask,
  updateTask,
} from "../controller/task.controller";

const router = Router();

router.route("/createTask/:userID").post(createTask);
router.route("/completeTask/:userID/:TaskID").patch(completeTask);
router.route("/uncompleteTask/:userID/:TaskID").patch(uncompletedTask);
router.route("/singleTask/:id").get(getOneTask);
router.route("/updateTask/:id").patch(updateTask);
router.route("/assigned/:id/:taskID").patch(AssignTask);
