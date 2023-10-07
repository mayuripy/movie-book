// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/router/user-router.js"

// const userRouter = require("./router/user-router");
dotenv.config();

const app = express();

app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  return res.send("<h1>abe tu ja nare </h1>");
});

// function main(){
mongoose
  .connect(`mongodb://localhost:27017/`)
  .then(() =>
    app.listen(5000, () => {
      console.log("App listening on port 5000!");
    })
  )
  .catch((e) => console.log(e));
// }
