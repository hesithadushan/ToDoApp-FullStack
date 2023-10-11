import { Request, Response } from "express";
import Category from "../models/category.modal";
import { ICategory } from "../types"
import { AuthRequest } from "../middleware"

export const getAllCategories = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    
    const { user } = request
    
    const categories = await Category.find({
      user: user,
    });
    return response.send(categories);
  } catch (error) {
    response.send({ error: "Something went wrong" })
    console.log("error in getAllCategories", error);
    throw error;
  }
};

export const createCategory = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { color, icon, isEditable, name }: ICategory = request.body;
    const { user } = request;

    const category = await Category.create({
      color,
      icon,
      isEditable,
      name,
      user,
    });
    response.send(category);
  } catch (error) {
    console.log("error in createCategory", error);
    response.send({ error: "Something went wrong" });
    throw error;
  }
};
