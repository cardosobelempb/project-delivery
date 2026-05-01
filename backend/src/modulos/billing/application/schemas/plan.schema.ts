import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatusDto } from "@/shared/enums/entity-status.enum";
import { VisibilityStatusDto } from "@/shared/enums/visibility-status.enum";
import { YesNoStatusDto } from "@/shared/enums/yes-no-status.enum";
import { z } from "zod";

/**
 * Validações Zod para Plan.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createPlanSchema = z
  .object({
    highlighted: z.nativeEnum(YesNoStatusDto).optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    description: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    commission: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    durationMonths: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    durationDays: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    totalValue: z.union([z.number(), z.string()]).optional(),
    monthlyValue: z.union([z.number(), z.string()]).optional(),
    link: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    terms: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    visible: z.nativeEnum(VisibilityStatusDto).optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    order: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    productLimit: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updatePlanSchema = createPlanSchema.partial().strict();

export const planPresenterSchema = z
  .object({
    id: z.string().uuid(),
    highlighted: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    name: z.string().max(255).nullable().optional(),
    description: z.string().nullable().optional(),
    commission: z.string().max(255).nullable().optional(),
    durationMonths: z.string().max(255).nullable().optional(),
    durationDays: z.string().max(255).nullable().optional(),
    totalValue: z.union([z.number(), z.string()]).nullable().optional(),
    monthlyValue: z.union([z.number(), z.string()]).nullable().optional(),
    link: z.string().max(255).nullable().optional(),
    terms: z.string().nullable().optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    visible: z.nativeEnum(VisibilityStatusDto).nullable().optional(),
    status: z.nativeEnum(EntityStatusDto).nullable().optional(),
    order: z.string().max(255).nullable().optional(),
    productLimit: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreatePlanInput = z.infer<typeof createPlanSchema>;
export type UpdatePlanInput = z.infer<typeof updatePlanSchema>;
export type PlanPresenter = z.infer<typeof planPresenterSchema>;

export const createPlanRawExample: CreatePlanInput = {
  highlighted: YesNoStatusDto.YES,
  name: "Exemplo",
  description: "valor_exemplo",
  commission: "valor_exemplo",
  durationMonths: "valor_exemplo",
  durationDays: "valor_exemplo",
  totalValue: 99.9,
  monthlyValue: 99.9,
  link: "https://exemplo.com",
  terms: "valor_exemplo",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  order: "valor_exemplo",
  productLimit: "valor_exemplo",
};

export const planPresenterRawExample: PlanPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  highlighted: YesNoStatusDto.YES,
  name: "Exemplo",
  description: "valor_exemplo",
  commission: "valor_exemplo",
  durationMonths: "valor_exemplo",
  durationDays: "valor_exemplo",
  totalValue: 99.9,
  monthlyValue: 99.9,
  link: "https://exemplo.com",
  terms: "valor_exemplo",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  order: "valor_exemplo",
  productLimit: "valor_exemplo",
};
