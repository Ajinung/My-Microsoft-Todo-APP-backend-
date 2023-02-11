import { Router } from "express";
import {
  getOneUser,
  getUsers,
  signIn,
  SignUp,
} from "../controller/user.controller";
const router = Router();

router.route("/register").post(SignUp);
router.route("/login").post(signIn);
router.route("/users").get(getUsers);
router.route("/oneuser/:id").get(getOneUser);

export default router;
