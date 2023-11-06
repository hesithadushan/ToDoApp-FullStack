import express, { Request, Response } from "express";
import connectToDatabase from "./src/db";
import userRoutes from "./src/routes/user.routes";
import categoryRoutes from "./src/routes/category.routes"
import { authenticationMiddleware } from "./src/middleware";
import taskRoutes from "./src/routes/task.routes";

const application = express();

application.use(express.json());

const PORT = 1337;

connectToDatabase();

application.get("/ping", (request: Request, response: Response) => {
  response.send("Pong");
});

/////////
application.use("/user", userRoutes);
application.use("/categories", authenticationMiddleware, categoryRoutes);
application.use("/tasks", authenticationMiddleware, taskRoutes);

// application.listen(PORT, () => {
//   console.log("Server up and running");
// });

export default application;