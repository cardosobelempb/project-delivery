import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { CreateUserSchema } from "../../application/schemas/user.schema";
import { UserCreateUseCase } from "../../application/use-cases/user-create.usecase";

export const userCreateController = (userCreateUseCase: UserCreateUseCase) => {
  return async (app: FastifyInstance): Promise<void> => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: "POST",
      url: "/",
      schema: {
        tags: ["User"],
        summary: "Cria uma nova organização",
        body: CreateUserSchema,
        // response: UserCreateResponseSchema,
      },
      handler: async (request, reply) => {
        const result = await userCreateUseCase.execute(request.body);

        if (result.isLeft()) {
          throw result.value;
        }

        console.log("Controller =>", result.value);

        return reply.status(201).send(result.value);
      },
    });
  };
};
