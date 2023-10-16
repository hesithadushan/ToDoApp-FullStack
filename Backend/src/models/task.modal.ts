import mongoose from "mongoose";
import taskSchemaTemplate from "../schema.templates/task.schema.templates";
import { AuthRequest } from "../middleware";
import { ITask } from "../types";
import { Response } from "express";

const taskSchema = new mongoose.Schema(taskSchemaTemplate, {
  timestamps: true,
});

const Task = mongoose.model("Task", taskSchema);

export const getAllTasksModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const userId = request.user;
    const tasks = await Task.find({
      user: userId,
    });
    return tasks;
  } catch (error) {
    console.error("Error in getAllTasksModel:", error);
  }
};

export const getAllTasksByCategoryModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const userId = request.user;
    const { id } = request.params;
    const tasks = await Task.find({
      user: userId,
      categoryId: id,
    });
    return tasks;
  } catch (error) {
    console.error("Error in getAllTasksByCategoryModel:", error);
  }
};

export const getAllCompletedTasksModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const userId = request.user;
    const tasks = await Task.find({
      user: userId,
      isCompleted: true,
    });
    return tasks;
  } catch (error) {
    console.error("Error in getAllCompletedTasksModel:", error);
  }
};

export const getTasksForTodayModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const userId = request.user;
    const todaysISODate = new Date();
    todaysISODate.setHours(0, 0, 0, 0);
    const tasks = await Task.find({
      user: userId,
      date: todaysISODate.toISOString(),
    });
    return tasks;
  } catch (error) {
    console.error("Error in getTasksForTodayModel:", error);
  }
};

export const createTaskModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const userId = request.user;
    const { name, date, categoryId }: ITask = request.body;

    const task = await Task.create({
      name,
      date,
      categoryId,
      user: userId,
    });
    return task;
  } catch (error) {
    console.error("Error in createTaskModel:", error);
  }
};

export const toggleTaskStatusModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { isCompleted } = request.body;
    const { id } = request.params;

    const task = await Task.updateOne(
      {
        _id: id,
      },
      {
        isCompleted: isCompleted,
      }
    );
  } catch (error) {
    console.error("Error in toggleTaskStatusModel:", error);
  }
};

export const deleteTaskModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { id } = request.params;
    await Task.deleteOne({
      _id: id,
    });
  } catch (error) {
    console.error("Error in deleteTaskModel:", error);
  }
};

export const editTaskModel = async (
  request: AuthRequest,
  response: Response
) => {
  try {
    const { _id, categoryId, date, name }: ITask = request.body;
    await Task.updateOne(
      {
        _id,
      },
      {
        $set: {
          name,
          categoryId,
          date,
        },
      }
    );
  } catch (error) {
    console.error("Error in editTaskModel:", error);
  }
};

export default Task;