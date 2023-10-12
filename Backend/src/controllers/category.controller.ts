import { Response } from "express";
import {
  createCategoryModel,
  deleteCategoryModal,
  getAllCategoriesModel,
  getCategoryByIdModal,
} from "../models/category.modal";
import { AuthRequest } from "../middleware";

export const getAllCategories = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const categories = await getAllCategoriesModel(request, response);
    return response.send(categories);
  } catch (error) {
    response.send({ error: "Something went wrong" });
    console.log("error in getAllCategories", error);
    throw error;
  }
};

export const createCategory = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const category = await createCategoryModel(request, response);
    response.send(category);
  } catch (error) {
    console.log("error in createCategory", error);
    response.send({ error: "Something went wrong" });
    throw error;
  }
};

export const getCategoryById = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const category = await getCategoryByIdModal(request, response);
    return response.send(category);
  } catch (error) {
    console.log("error in getCategoryById", error);
  }
};

export const deleteCategory = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    await deleteCategoryModal(request, response);
    return response.send({ message: "Category deleted successfully" });
  } catch (error) {
    console.log("error in deleteCategory", error);
  }
};
