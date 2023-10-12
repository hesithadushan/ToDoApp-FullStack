import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers/category.controller";
import { authenticationMiddleware } from "../middleware";

const categoryRoutes = express.Router();

categoryRoutes.use(authenticationMiddleware);

categoryRoutes.route("/").get(getAllCategories);
categoryRoutes.route("/create").post(createCategory);
categoryRoutes.route("/:id").get(getCategoryById);

export default categoryRoutes;