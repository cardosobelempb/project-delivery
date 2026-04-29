import { ValidatorMessage } from "@/common/domain/validations";
import { MediaTypeDto } from "@/shared/dto/media-type.dto";
import { z } from "zod";

/**
 * Validações Zod para Media.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createMediaSchema = z
  .object({
    type: z.nativeEnum(MediaTypeDto).optional(),
    establishmentId: z.string().uuid().optional(),
    relatedId: z.string().uuid().optional(),
    url: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updateMediaSchema = createMediaSchema.partial().strict();

export const mediaPresenterSchema = z
  .object({
    id: z.string().uuid(),
    type: z.nativeEnum(MediaTypeDto).nullable().optional(),
    establishmentId: z.string().uuid().nullable().optional(),
    relatedId: z.string().uuid().nullable().optional(),
    url: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreateMediaInput = z.infer<typeof createMediaSchema>;
export type UpdateMediaInput = z.infer<typeof updateMediaSchema>;
export type MediaPresenter = z.infer<typeof mediaPresenterSchema>;

export const createMediaRawExample: CreateMediaInput = {
  type: MediaTypeDto.PRODUCT,
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  relatedId: "550e8400-e29b-41d4-a716-446655440000",
  url: "https://exemplo.com",
};

export const mediaPresenterRawExample: MediaPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  type: MediaTypeDto.PRODUCT,
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  relatedId: "550e8400-e29b-41d4-a716-446655440000",
  url: "https://exemplo.com",
};
