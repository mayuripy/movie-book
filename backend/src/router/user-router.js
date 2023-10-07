// const express = require("express");
import express from "express";


// const userController = require("../controlleres/user-controller");
import { getAIIUser, adduser} from "../controlleres/user-controller";

const userRouter = express.Router();

userRouter.get("/alluser",getAIIUser);
userRouter.post("/",adduser)

export { userRouter };