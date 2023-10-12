import mongoose from "mongoose";
import { Response } from "express";
import categorySchemaTemplate from "../schema.templates/category.schema.template";
import { AuthRequest } from "../middleware";
import { ICategory } from "../types";

const categorySchema = new mongoose.Schema(categorySchemaTemplate);

const Category = mongoose.model("Category", categorySchema);

export const getAllCategoriesModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { user } = request;

    const categories = await Category.find({
      user: user,
    });
    return response.send(categories);
  } catch (error) {
    response.send({ error: "Something went wrong" });
    console.log("error in getAllCategories", error);
    throw error;
  }
};

export const createCategoryModel = async (
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

export const getCategoryByIdModal = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { user } = request
    const { id } = request.params

    const category = await Category.findOne({
      _id: id,
    })
    return response.send(category)
  } catch (error) {
    response.send({ error: "Something went wrong" })
    console.log("error in getAllCategories", error)
    throw error
  }
}
export default Category;