import { Response } from "express";
import { AuthRequest } from "../middleware";
import {
  createTaskModel,
  getAllCompletedTasksModel,
  getAllTasksByCategoryModel,
  getAllTasksModel,
  getTasksForTodayModel,
  toggleTaskStatusModel,
  deleteTaskModel,
  editTaskModel,
} from "../models/task.modal";

export const getAllTasks = async (request: AuthRequest, response: Response) => {
  try {
    const result = await getAllTasksModel(request, response);
    return response.status(200).json(result);
  } catch (error) {
    console.log("error in getAllTasks", error);
  }
};

export const getAllTasksByCategory = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const result = await getAllTasksByCategoryModel(request, response);
    return response.status(200).json(result);
  } catch (error) {
    console.log("error in getAllTasksByCategory", error);
  }
};

export const getAllCompletedTasks = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const result = await getAllCompletedTasksModel(request, response);
    return response.status(200).json(result);
  } catch (error) {
    console.log("error in getAllCompletedTasks", error);
  }
};

export const getTasksForToday = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const result = await getTasksForTodayModel(request, response);
    return response.status(200).json(result);
  } catch (error) {
    console.log("error in getTasksForToday", error);
  }
};

export const createTask = async (request: AuthRequest, response: Response) => {
  try {
    const result = await createTaskModel(request, response);
    return response.status(200).json(result);
  } catch (error) {
    console.log("error in createTask", error);
  }
};

export const toggleTaskStatus = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    await toggleTaskStatusModel(request, response);
    return response.status(200).json({ message: "Task status updated" });
  } catch (error) {
    console.log("error in toggleTaskStatus", error);
  }
};

export const deleteTask = async (request: AuthRequest, response: Response) => {
  try {
    await deleteTaskModel(request, response);
    response.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.log("error in deleteTask", error);
  }
};

export const editTask = async (request: AuthRequest, response: Response) => {
  try {
    await editTaskModel(request, response);
    response.status(200).json({ message: "Task Edited" });
  } catch (error) {
    console.log("error in editTask", error);
  }
};
