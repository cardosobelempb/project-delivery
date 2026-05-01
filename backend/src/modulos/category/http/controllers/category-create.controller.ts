import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { CreateCategorySchema } from "../../application/schemas/category.schema";
import { CategoryCreateUseCase } from "../../application/usecases/category-create.usecase";

export const categoryCreateController = (
  categoryCreateUseCase: CategoryCreateUseCase,
) => {
  return async (app: FastifyInstance): Promise<void> => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: "POST",
      url: "/",
      schema: {
        tags: ["Category"],
        summary: "Cria uma nova organização",
        body: CreateCategorySchema,
        // response: CategoryCreateResponseSchema,
      },
      handler: async (request, reply) => {
        const result = await categoryCreateUseCase.execute(request.body);

        if (result.isLeft()) {
          throw result.value;
        }

        console.log("Controller =>", result.value);

        return reply.status(201).send(result.value);
      },
    });
  };
};
