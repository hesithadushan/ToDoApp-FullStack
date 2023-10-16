import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller";

const categoryRoutes = express.Router();

categoryRoutes.get("/",getAllCategories);
categoryRoutes.post("/create",createCategory);
categoryRoutes.get("/:id",getCategoryById);
categoryRoutes.delete("/:id",deleteCategory)
categoryRoutes.put("/update",updateCategory)

export default categoryRoutes;