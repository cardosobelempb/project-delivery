import { ValidatorMessage } from "@/common/domain/validations";
import { SubscriptionModeDto } from "@/shared/dto/subscription-mode.dto";
import { SubscriptionStatusDto } from "@/shared/dto/subscription-status.dto";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";
import { z } from "zod";

/**
 * Validações Zod para Subscription.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createSubscriptionSchema = z
  .object({
    planId: z.string().uuid().optional(),
    establishmentId: z.string().uuid().optional(),
    establishmentName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    establishmentSubdomain: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    affiliate: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    description: z.string().optional(),
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
    receivedValue: z.union([z.number(), z.string()]).optional(),
    monthlyValue: z.union([z.number(), z.string()]).optional(),
    terms: z.string().optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    gatewayReference: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    gatewayLink: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    gatewayTransaction: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    gatewayPayableAt: z.coerce.date().optional(),
    gatewayExpirationAt: z.coerce.date().optional(),
    gatewayPayment: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    mode: z.nativeEnum(SubscriptionModeDto).optional(),
    voucherCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    status: z.nativeEnum(SubscriptionStatusDto).optional(),
    used: z.coerce.boolean().optional(),
    expiresAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
    excluded: z
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

export const updateSubscriptionSchema = createSubscriptionSchema
  .partial()
  .strict();

export const subscriptionPresenterSchema = z
  .object({
    id: z.string().uuid(),
    planId: z.string().uuid().nullable().optional(),
    establishmentId: z.string().uuid().nullable().optional(),
    establishmentName: z.string().max(255).nullable().optional(),
    establishmentSubdomain: z.string().max(255).nullable().optional(),
    affiliate: z.string().max(255).nullable().optional(),
    name: z.string().max(255).nullable().optional(),
    description: z.string().nullable().optional(),
    commission: z.string().max(255).nullable().optional(),
    durationMonths: z.string().max(255).nullable().optional(),
    durationDays: z.string().max(255).nullable().optional(),
    totalValue: z.union([z.number(), z.string()]).nullable().optional(),
    receivedValue: z.union([z.number(), z.string()]).nullable().optional(),
    monthlyValue: z.union([z.number(), z.string()]).nullable().optional(),
    terms: z.string().nullable().optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    gatewayReference: z.string().max(255).nullable().optional(),
    gatewayLink: z.string().max(255).nullable().optional(),
    gatewayTransaction: z.string().max(255).nullable().optional(),
    gatewayPayableAt: z.coerce.date().nullable().optional(),
    gatewayExpirationAt: z.coerce.date().nullable().optional(),
    gatewayPayment: z.string().max(255).nullable().optional(),
    mode: z.nativeEnum(SubscriptionModeDto).nullable().optional(),
    voucherCode: z.string().max(255).nullable().optional(),
    status: z.nativeEnum(SubscriptionStatusDto).nullable().optional(),
    used: z.coerce.boolean().nullable().optional(),
    expiresAt: z.coerce.date().nullable().optional(),
    createdAt: z.coerce.date().nullable().optional(),
    excluded: z.string().max(255).nullable().optional(),
    productLimit: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreateSubscriptionInput = z.infer<typeof createSubscriptionSchema>;
export type UpdateSubscriptionInput = z.infer<typeof updateSubscriptionSchema>;
export type SubscriptionPresenter = z.infer<typeof subscriptionPresenterSchema>;

export const createSubscriptionRawExample: CreateSubscriptionInput = {
  planId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentName: "Exemplo",
  establishmentSubdomain: "valor_exemplo",
  affiliate: "valor_exemplo",
  name: "Exemplo",
  description: "valor_exemplo",
  commission: "valor_exemplo",
  durationMonths: "valor_exemplo",
  durationDays: "valor_exemplo",
  totalValue: 99.9,
  receivedValue: 99.9,
  monthlyValue: 99.9,
  terms: "valor_exemplo",
  triggerFeature: YesNoStatusDto.YES,
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  gatewayReference: "valor_exemplo",
  gatewayLink: "https://exemplo.com",
  gatewayTransaction: "valor_exemplo",
  gatewayPayableAt: new Date("2026-04-28T12:00:00.000Z"),
  gatewayExpirationAt: new Date("2026-04-28T12:00:00.000Z"),
  gatewayPayment: "valor_exemplo",
  mode: SubscriptionModeDto.TRIAL,
  voucherCode: "CODE123",
  status: SubscriptionStatusDto.PENDING,
  used: true,
  expiresAt: new Date("2026-04-28T12:00:00.000Z"),
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  excluded: "valor_exemplo",
  productLimit: "valor_exemplo",
};

export const subscriptionPresenterRawExample: SubscriptionPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  planId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentName: "Exemplo",
  establishmentSubdomain: "valor_exemplo",
  affiliate: "valor_exemplo",
  name: "Exemplo",
  description: "valor_exemplo",
  commission: "valor_exemplo",
  durationMonths: "valor_exemplo",
  durationDays: "valor_exemplo",
  totalValue: 99.9,
  receivedValue: 99.9,
  monthlyValue: 99.9,
  terms: "valor_exemplo",
  triggerFeature: YesNoStatusDto.YES,
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  gatewayReference: "valor_exemplo",
  gatewayLink: "https://exemplo.com",
  gatewayTransaction: "valor_exemplo",
  gatewayPayableAt: new Date("2026-04-28T12:00:00.000Z"),
  gatewayExpirationAt: new Date("2026-04-28T12:00:00.000Z"),
  gatewayPayment: "valor_exemplo",
  mode: SubscriptionModeDto.TRIAL,
  voucherCode: "CODE123",
  status: SubscriptionStatusDto.PENDING,
  used: true,
  expiresAt: new Date("2026-04-28T12:00:00.000Z"),
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  excluded: "valor_exemplo",
  productLimit: "valor_exemplo",
};
