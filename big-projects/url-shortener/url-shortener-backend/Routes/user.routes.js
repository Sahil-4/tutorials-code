import { Router } from "express";
import { deactivate, login, signup } from "../Controllers/user.controllers.js";
import { auth } from "../Middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/signup", signup);

userRouter.post("/login", login);

userRouter.post("/deactivate", auth, deactivate);

export default userRouter;