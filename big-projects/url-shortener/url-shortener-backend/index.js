import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./Database/index.js";
import userRouter from "./Routes/user.routes.js";
import urlRouter from "./Routes/url.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("server is up");
});

// handle user related requests
app.use("/api/v1/user", userRouter);

// handle url related requests
app.use("/api/v1/url", urlRouter);

try {
  connectToDatabase();
  app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on PORT : ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}
