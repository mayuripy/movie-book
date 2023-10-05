import express from "express"

const userRouter = express.Router();

userRouter.get("/alluser",getAIIUsers);
//locallhost:5000/user/alluser

export default  userRouter;