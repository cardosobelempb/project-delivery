import { z } from 'zod';

/**
 * Validações Zod para Validity.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createValiditySchema = z.object({
  day: z.string().max(550).optional(),
  month: z.string().max(550).optional(),
  year: z.string().max(550).optional(),
  productId: z.string().uuid().optional(),
  establishmentId: z.string().uuid(),
  quantity: z.string().max(550).optional(),
}).strict();

export const updateValiditySchema = createValiditySchema.partial().strict();

export const validityPresenterSchema = z.object({
  id: z.string().uuid(),
  day: z.string().max(550).nullable().optional(),
  month: z.string().max(550).nullable().optional(),
  year: z.string().max(550).nullable().optional(),
  productId: z.string().uuid().nullable().optional(),
  establishmentId: z.string().uuid(),
  quantity: z.string().max(550).nullable().optional(),
}).strict();

export type CreateValidityInput = z.infer<typeof createValiditySchema>;
export type UpdateValidityInput = z.infer<typeof updateValiditySchema>;
export type ValidityPresenter = z.infer<typeof validityPresenterSchema>;

export const createValidityRawExample: CreateValidityInput = {
  day: "valor_exemplo",
  month: "valor_exemplo",
  year: "valor_exemplo",
  productId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  quantity: "valor_exemplo",
};

export const validityPresenterRawExample: ValidityPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  day: "valor_exemplo",
  month: "valor_exemplo",
  year: "valor_exemplo",
  productId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  quantity: "valor_exemplo",
};
