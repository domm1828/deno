import { RouterContext  } from "oak";
import { UserService } from "../services/userService.ts";

const service = new UserService();

export class UserController {
  async getUsers(ctx: RouterContext ) {
    ctx.response.body = await service.getAllUsers();
  }

  async getUser(ctx: RouterContext ) {
    const id = ctx.params.id!;
    ctx.response.body = await service.getUserById(id);
  }

  async createUser(ctx: RouterContext ) {  
    const body = await ctx.request.body({ type: "json" }).value;
    const user = await service.createUser(body);
    ctx.response.body = { user };
  }

  async updateUser(ctx: RouterContext ) {
    const id = ctx.params.id!;
    const body = await ctx.request.body({ type: "json" }).value;
    ctx.response.body = await service.updateUser(id, body);
  }

  async deleteUser(ctx: RouterContext) {
    const id = ctx.params.id!;
    ctx.response.body = await service.deleteUser(id);
  }
}
