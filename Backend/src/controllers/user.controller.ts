import { Request, Response } from "express";
import { createUserModel, loginUserModel } from "../models/user.model";

export const createUser = async (request: Request, response: Response) => {
  try {
    createUserModel(request, response);
  } catch (error) {
    console.log("Cannot create user", error);
    throw error;
  }
};

export const loginUser = async (request: Request, response: Response) => {
  try {
    loginUserModel(request, response);
  } catch (error) {
    console.log("Cannot login user", error);
    throw error;
  }
};
