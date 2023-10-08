// const express = require("express");
import express from "express";


// const userController = require("../controlleres/user-controller");
import { getAIIUser, AddUser} from "../controlleres/user-controller.js";

const userRouter = express.Router();

userRouter.get("/alluser",getAIIUser);
userRouter.post("/",AddUser)

export { userRouter };