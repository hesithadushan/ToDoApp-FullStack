import express from "express";
import { createUser, loginUser } from "../controllers/user.controller";

const userRoutes = express.Router();

userRoutes.post("/create",createUser);
userRoutes.post("/login",loginUser);

export default userRoutes;
