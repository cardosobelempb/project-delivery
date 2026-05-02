import { FastifyInstance } from "fastify";

import { userCreateUseCase } from "../../container";
import { userCreateController } from "../controllers/user-create.controller";

export async function userRoutes(app: FastifyInstance): Promise<void> {
  await app.register(userCreateController(userCreateUseCase));
  // await app.register(
  //   userFindByIdController(userFindByIdUseCase),
  // );
  // await app.register(userUpdateController(userUpdateUseCase));
  // await app.register(userPageController(userPageUseCase));
  // await app.register(
  //   userActivateController(userActivateUseCase),
  // );
  // await app.register(
  //   userDeactivateController(userDeactivateUseCase),
  // );
}
