import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

/**
 * Validações Zod para Log.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createLogSchema = z
  .object({
    userId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid().optional(),
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    info: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
  })
  .strict();

export const updateLogSchema = createLogSchema.partial().strict();

export const logPresenterSchema = z
  .object({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
    userId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    info: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    createdAt: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
  })
  .strict();

export type CreateLogInput = z.infer<typeof createLogSchema>;
export type UpdateLogInput = z.infer<typeof updateLogSchema>;
export type LogPresenter = z.infer<typeof logPresenterSchema>;

export const createLogRawExample: CreateLogInput = {
  userId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  info: "example",
};

export const logPresenterRawExample: LogPresenter = {
  id: "00000000-0000-4000-8000-000000000000",
  userId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  info: "example",
  createdAt: "2026-04-28T12:00:00.000Z",
};
