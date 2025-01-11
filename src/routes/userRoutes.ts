import { Router } from "oak";
import { UserController } from "../controllers/userController.ts";

const controller = new UserController();
const router = new Router();

router
  .get("/users", (ctx) => controller.getUsers(ctx))
  .get("/users/:id", (ctx) => controller.getUser(ctx))
  .post("/users", (ctx) => controller.createUser(ctx))
  .put("/users/:id", (ctx) => controller.updateUser(ctx))
  .delete("/users/:id", (ctx) => controller.deleteUser(ctx));

export default router;
