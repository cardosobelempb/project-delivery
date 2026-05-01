import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatusDto } from "@/shared/enums/entity-status.enum";
import { z } from "zod";

/**
 * Validações Zod para Banner.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createBannerSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    title: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    desktopImage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    mobileImage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    videoLink: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    link: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const updateBannerSchema = createBannerSchema.partial().strict();

export const bannerPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    title: z.string().max(255).nullable().optional(),
    desktopImage: z.string().max(255).nullable().optional(),
    mobileImage: z.string().max(255).nullable().optional(),
    videoLink: z.string().max(255).nullable().optional(),
    link: z.string().max(255).nullable().optional(),
    status: z.nativeEnum(EntityStatusDto).nullable().optional(),
    createdAt: z.coerce.date().nullable().optional(),
    updatedAt: z.coerce.date().nullable().optional(),
  })
  .strict();

export type CreateBannerInput = z.infer<typeof createBannerSchema>;
export type UpdateBannerInput = z.infer<typeof updateBannerSchema>;
export type BannerPresenter = z.infer<typeof bannerPresenterSchema>;

export const createBannerRawExample: CreateBannerInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  title: "Exemplo",
  desktopImage: "valor_exemplo",
  mobileImage: "valor_exemplo",
  videoLink: "https://exemplo.com",
  link: "https://exemplo.com",
  status: EntityStatusDto.ACTIVE,
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
};

export const bannerPresenterRawExample: BannerPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  title: "Exemplo",
  desktopImage: "valor_exemplo",
  mobileImage: "valor_exemplo",
  videoLink: "https://exemplo.com",
  link: "https://exemplo.com",
  status: EntityStatusDto.ACTIVE,
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  updatedAt: new Date("2026-04-28T12:00:00.000Z"),
};
