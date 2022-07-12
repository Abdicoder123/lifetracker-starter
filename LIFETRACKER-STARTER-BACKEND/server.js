//const express = require("express");
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./Routes/Auth.js";

const app = Express();
const port = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(Express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
