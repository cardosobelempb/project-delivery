import { FastifyInstance } from "fastify";
import { categoryPageUseCase } from "../../container";
import { categoryPageController } from "../controllers/category-page.controller";

export async function categoryRoutes(app: FastifyInstance): Promise<void> {
  // await app.register(categoryCreateController(categoryCreateUseCase));
  // await app.register(
  //   categoryFindByIdController(categoryFindByIdUseCase),
  // );
  // await app.register(categoryUpdateController(categoryUpdateUseCase));
  await app.register(categoryPageController(categoryPageUseCase));
  // await app.register(
  //   categoryActivateController(categoryActivateUseCase),
  // );
  // await app.register(
  //   categoryDeactivateController(categoryDeactivateUseCase),
  // );
}
