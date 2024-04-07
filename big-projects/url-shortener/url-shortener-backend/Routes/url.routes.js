import { Router } from "express";
import { auth } from "../Middleware/auth.middleware.js";
import {
  createNewURL,
  deleteURL,
  getAllURLs,
  handleRedirect,
} from "../Controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.get("/get", auth, getAllURLs);

urlRouter.get("/redirect/:shortURL", handleRedirect);

urlRouter.post("/new", auth, createNewURL);

urlRouter.post("/delete", auth, deleteURL);

export default urlRouter;
