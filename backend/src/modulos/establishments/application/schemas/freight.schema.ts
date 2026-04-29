import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

/**
 * Validações Zod para Freight.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createFreightSchema = z
  .object({
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    name: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    value: z.coerce
      .number(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    other: z.boolean().optional(),
  })
  .strict();

export const updateFreightSchema = createFreightSchema.partial().strict();

export const freightPresenterSchema = z
  .object({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    name: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    value: z.coerce
      .number(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    other: z.boolean().nullable().optional(),
  })
  .strict();

export type CreateFreightInput = z.infer<typeof createFreightSchema>;
export type UpdateFreightInput = z.infer<typeof updateFreightSchema>;
export type FreightPresenter = z.infer<typeof freightPresenterSchema>;

export const createFreightRawExample: CreateFreightInput = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  value: 10.5,
  other: true,
};

export const freightPresenterRawExample: FreightPresenter = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  value: 10.5,
  other: true,
};
