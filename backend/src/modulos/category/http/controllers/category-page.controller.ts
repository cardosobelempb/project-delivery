import { PageQuerySchema } from "@/shared/schemas/page-query.schema";
import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import { CategoryPageResponseSchema } from "../../application/schemas/category.schema";
import { CategoryPageUseCase } from "../../application/usecases/category-page.usecase";

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
        querystring: PageQuerySchema,
        response: CategoryPageResponseSchema,
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
