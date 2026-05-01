import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { CategoryPageUseCase } from "../../application/usecases/category-page.usecase";
import {
  CategoryPageQuerySchema,
  CategoryPageResponseSchema,
} from "../schemas/category.schema";

export const categoryPageController = (
  categoryPageUseCase: CategoryPageUseCase,
) => {
  return async (app: FastifyInstance): Promise<void> => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: "GET",
      url: "/",
      schema: {
        tags: ["Category"],
        summary: "Lista organizações com paginação e filtro",
        querystring: CategoryPageQuerySchema,
        response: {
          200: CategoryPageResponseSchema,
        },
      },
      handler: async (request, reply) => {
        const result = await categoryPageUseCase.execute({
          page: request.query.page,
          size: request.query.size,
          sort: request.query.sort,
          filter: request.query.filter,
        });
        // const page = result.value;
        // console.log(page);
        console.log("Page content:", result); // ✅ Conteúdo da página

        return reply.status(200).send(result);
      },
    });
  };
};
