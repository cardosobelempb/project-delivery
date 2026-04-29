import { EntityStatusDto } from "@/shared/dto/entity-status.dto";
import { z } from "zod";

/**
 * Validações Zod para MarketplaceBanner.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createMarketplaceBannerSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    cityId: z.string().uuid().optional(),
    title: z.string().max(255).optional(),
    desktopImage: z.string().max(255).optional(),
    mobileImage: z.string().max(255).optional(),
    videoLink: z.string().max(255).optional(),
    link: z.string().max(255).optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const updateMarketplaceBannerSchema = createMarketplaceBannerSchema
  .partial()
  .strict();

export const marketplaceBannerPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    cityId: z.string().uuid().nullable().optional(),
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

export type CreateMarketplaceBannerInput = z.infer<
  typeof createMarketplaceBannerSchema
>;
export type UpdateMarketplaceBannerInput = z.infer<
  typeof updateMarketplaceBannerSchema
>;
export type MarketplaceBannerPresenter = z.infer<
  typeof marketplaceBannerPresenterSchema
>;

export const createMarketplaceBannerRawExample: CreateMarketplaceBannerInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  cityId: "550e8400-e29b-41d4-a716-446655440000",
  title: "Exemplo",
  desktopImage: "valor_exemplo",
  mobileImage: "valor_exemplo",
  videoLink: "https://exemplo.com",
  link: "https://exemplo.com",
  status: EntityStatusDto.ACTIVE,
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
};

export const marketplaceBannerPresenterRawExample: MarketplaceBannerPresenter =
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    establishmentId: "550e8400-e29b-41d4-a716-446655440000",
    cityId: "550e8400-e29b-41d4-a716-446655440000",
    title: "Exemplo",
    desktopImage: "valor_exemplo",
    mobileImage: "valor_exemplo",
    videoLink: "https://exemplo.com",
    link: "https://exemplo.com",
    status: EntityStatusDto.ACTIVE,
    createdAt: new Date("2026-04-28T12:00:00.000Z"),
    updatedAt: new Date("2026-04-28T12:00:00.000Z"),
  };
