import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

/**
 * Validações Zod para Link.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createLinkSchema = z
  .object({
    url: z.string().max(550).optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updateLinkSchema = createLinkSchema.partial().strict();

export const linkPresenterSchema = z
  .object({
    id: z.string().uuid(),
    url: z.string().max(550).nullable().optional(),
    name: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreateLinkInput = z.infer<typeof createLinkSchema>;
export type UpdateLinkInput = z.infer<typeof updateLinkSchema>;
export type LinkPresenter = z.infer<typeof linkPresenterSchema>;

export const createLinkRawExample: CreateLinkInput = {
  url: "https://exemplo.com",
  name: "Exemplo",
};

export const linkPresenterRawExample: LinkPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  url: "https://exemplo.com",
  name: "Exemplo",
};
