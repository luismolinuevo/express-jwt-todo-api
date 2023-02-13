import express from "express";
import authRouter from "./routes/auth.js";
import todoRouter from "./routes/todo.js";

export default function createServer() {
  const app = express();

  app.use(express.json());

  //Here is where you will add the authentication strategies
  // app.use()

  app.use("/auth", authRouter);

  app.use("/todo", todoRouter);

  return app;
}
