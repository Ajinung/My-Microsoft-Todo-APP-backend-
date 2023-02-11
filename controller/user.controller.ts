import { Request, Response } from "express";
import userModel from "../model/user.model";
import taskModel from "../model/task.model";
import { userDetails } from "../model/allInterface";

const SignUp = async (
  req: Request<{}, {}, userDetails>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const register = await userModel.create({
      name,
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    });

    return res.status(201).json({
      message: `welcome ${register.name}`,
      data: register,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const signIn = async (
  req: Request<{}, {}, userDetails>,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const login = await userModel.findOne({
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    });

    if (!login) {
      return res.status(400).json({
        message: `error logging you in`,
      });
    }
    return res.status(200).json({
      message: `login successful`,
      data: login,
    });
  } catch (error) {
    return res.status(400).json({
      message: `login failed`,
      error,
    });
  }
};

const getUsers = async (
  req: Request<{}, {}, userDetails>,
  res: Response
): Promise<Response> => {
  try {
    const allUsers = await userModel.find();

    return res.status(200).json({
      message: `${allUsers.length} users found`,
      data: allUsers,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error getting data`,
      error,
    });
  }
};

const getOneUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = await userModel.findById(req.params.id).populate([
      {
        path: "myDay",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
      {
        path: "task",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
      {
        path: "assigned",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
    ]);

    return res.status(400).json({
      message: `welcoome ${userData?.name}`,
    });
  } catch (error) {
    return res.status(400).json({
      message: `user does not exists`,
      error,
    });
  }
};
export { signIn, SignUp, getOneUser, getUsers };
