import { z } from 'zod';

/**
 * Validações Zod para Segment.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createSegmentSchema = z.object({
  icon: z.string().max(255).optional(),
  name: z.string().max(75).optional(),
  ageRating: z.string().max(255).optional(),
}).strict();

export const updateSegmentSchema = createSegmentSchema.partial().strict();

export const segmentPresenterSchema = z.object({
  id: z.string().uuid(),
  icon: z.string().max(255).nullable().optional(),
  name: z.string().max(75).nullable().optional(),
  ageRating: z.string().max(255).nullable().optional(),
}).strict();

export type CreateSegmentInput = z.infer<typeof createSegmentSchema>;
export type UpdateSegmentInput = z.infer<typeof updateSegmentSchema>;
export type SegmentPresenter = z.infer<typeof segmentPresenterSchema>;

export const createSegmentRawExample: CreateSegmentInput = {
  icon: "valor_exemplo",
  name: "Exemplo",
  ageRating: "valor_exemplo",
};

export const segmentPresenterRawExample: SegmentPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  icon: "valor_exemplo",
  name: "Exemplo",
  ageRating: "valor_exemplo",
};
