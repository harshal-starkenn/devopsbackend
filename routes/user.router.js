const express = require("express");
const { User, getUser } = require("../controllers/User");
const userRouter = express.Router();

userRouter.get("/getuser", getUser);
userRouter.post("/adduser", User);

module.exports = { userRouter };
