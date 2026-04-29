import { z } from 'zod';

/**
 * Validações Zod para Freight.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createFreightSchema = z.object({
  establishmentId: z.string().uuid().optional(),
  name: z.string().max(255).optional(),
  value: z.union([z.number(), z.string()]).optional(),
  other: z.coerce.boolean().optional(),
}).strict();

export const updateFreightSchema = createFreightSchema.partial().strict();

export const freightPresenterSchema = z.object({
  id: z.string().uuid(),
  establishmentId: z.string().uuid().nullable().optional(),
  name: z.string().max(255).nullable().optional(),
  value: z.union([z.number(), z.string()]).nullable().optional(),
  other: z.coerce.boolean().nullable().optional(),
}).strict();

export type CreateFreightInput = z.infer<typeof createFreightSchema>;
export type UpdateFreightInput = z.infer<typeof updateFreightSchema>;
export type FreightPresenter = z.infer<typeof freightPresenterSchema>;

export const createFreightRawExample: CreateFreightInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  name: "Exemplo",
  value: 99.90,
  other: true,
};

export const freightPresenterRawExample: FreightPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  name: "Exemplo",
  value: 99.90,
  other: true,
};
