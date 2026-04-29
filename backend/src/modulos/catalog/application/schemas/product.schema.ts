import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatusDto } from "@/shared/dto/entity-status.dto";
import { VisibilityStatusDto } from "@/shared/dto/visibility-status.dto";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";
import { z } from "zod";

/**
 * Validações Zod para Product.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createProductSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    categoryId: z.string().uuid().optional(),
    featured: z.nativeEnum(YesNoStatusDto).optional(),
    reference: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pdvCode: z.coerce.number().int().optional(),
    points: z.coerce.number().optional(),
    allowExchange: z.coerce.boolean().optional(),
    itemPoints: z.coerce.number().int().optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    videoLink: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    description: z.string().optional(),
    price: z.union([z.number(), z.string()]).optional(),
    offer: z.nativeEnum(YesNoStatusDto).optional(),
    promotionalPrice: z.union([z.number(), z.string()]).optional(),
    variationJson: z.string().optional(),
    visible: z.nativeEnum(VisibilityStatusDto).optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    orderStatus: z.string().max(2).optional(),
    integrated: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    shippingWeight: z.coerce.number().optional(),
    shippingHeight: z.coerce.number().optional(),
    shippingWidth: z.coerce.number().optional(),
    shippingLength: z.coerce.number().optional(),
    shippingDiameter: z.coerce.number().optional(),
    stockEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    position: z.string().max(9).optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const updateProductSchema = createProductSchema.partial().strict();

export const productPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    categoryId: z.string().uuid().nullable().optional(),
    featured: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    reference: z.string().max(255).nullable().optional(),
    pdvCode: z.coerce.number().int().nullable().optional(),
    points: z.coerce.number().nullable().optional(),
    allowExchange: z.coerce.boolean().nullable().optional(),
    itemPoints: z.coerce.number().int().nullable().optional(),
    name: z.string().max(255).nullable().optional(),
    videoLink: z.string().max(255).nullable().optional(),
    description: z.string().nullable().optional(),
    price: z.union([z.number(), z.string()]).nullable().optional(),
    offer: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    promotionalPrice: z.union([z.number(), z.string()]).nullable().optional(),
    variationJson: z.string().nullable().optional(),
    visible: z.nativeEnum(VisibilityStatusDto).nullable().optional(),
    status: z.nativeEnum(EntityStatusDto).nullable().optional(),
    orderStatus: z.string().max(2).nullable().optional(),
    integrated: z.string().max(255).nullable().optional(),
    shippingWeight: z.coerce.number().nullable().optional(),
    shippingHeight: z.coerce.number().nullable().optional(),
    shippingWidth: z.coerce.number().nullable().optional(),
    shippingLength: z.coerce.number().nullable().optional(),
    shippingDiameter: z.coerce.number().nullable().optional(),
    stockEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    position: z.string().max(9).nullable().optional(),
    createdAt: z.coerce.date().nullable().optional(),
    updatedAt: z.coerce.date().nullable().optional(),
  })
  .strict();

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductPresenter = z.infer<typeof productPresenterSchema>;

export const createProductRawExample: CreateProductInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  categoryId: "550e8400-e29b-41d4-a716-446655440000",
  featured: YesNoStatusDto.YES,
  reference: "valor_exemplo",
  pdvCode: 1,
  points: 10.5,
  allowExchange: true,
  itemPoints: 1,
  name: "Exemplo",
  videoLink: "https://exemplo.com",
  description: "valor_exemplo",
  price: 99.9,
  offer: YesNoStatusDto.YES,
  promotionalPrice: 99.9,
  variationJson: "valor_exemplo",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  orderStatus: "valor_exemplo",
  integrated: "valor_exemplo",
  shippingWeight: 10.5,
  shippingHeight: 10.5,
  shippingWidth: 10.5,
  shippingLength: 10.5,
  shippingDiameter: 10.5,
  stockEnabled: YesNoStatusDto.YES,
  position: "valor_exemplo",
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
};

export const productPresenterRawExample: ProductPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  categoryId: "550e8400-e29b-41d4-a716-446655440000",
  featured: YesNoStatusDto.YES,
  reference: "valor_exemplo",
  pdvCode: 1,
  points: 10.5,
  allowExchange: true,
  itemPoints: 1,
  name: "Exemplo",
  videoLink: "https://exemplo.com",
  description: "valor_exemplo",
  price: 99.9,
  offer: YesNoStatusDto.YES,
  promotionalPrice: 99.9,
  variationJson: "valor_exemplo",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  orderStatus: "valor_exemplo",
  integrated: "valor_exemplo",
  shippingWeight: 10.5,
  shippingHeight: 10.5,
  shippingWidth: 10.5,
  shippingLength: 10.5,
  shippingDiameter: 10.5,
  stockEnabled: YesNoStatusDto.YES,
  position: "valor_exemplo",
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  updatedAt: new Date("2026-04-28T12:00:00.000Z"),
};
