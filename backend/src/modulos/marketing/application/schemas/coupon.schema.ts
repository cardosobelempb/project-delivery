import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

/**
 * Validações Zod para Coupon.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createCouponSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    description: z.string().optional(),
    code: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    type: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    discountPercentage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    fixedDiscount: z.union([z.number(), z.string()]).optional(),
    maxValue: z.union([z.number(), z.string()]).optional(),
    quantity: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    validUntil: z.coerce.date().optional(),
  })
  .strict();

export const updateCouponSchema = createCouponSchema.partial().strict();

export const couponPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    name: z.string().max(255).nullable().optional(),
    description: z.string().nullable().optional(),
    code: z.string().max(255).nullable().optional(),
    type: z.string().max(255).nullable().optional(),
    discountPercentage: z.string().max(255).nullable().optional(),
    fixedDiscount: z.union([z.number(), z.string()]).nullable().optional(),
    maxValue: z.union([z.number(), z.string()]).nullable().optional(),
    quantity: z.string().max(255).nullable().optional(),
    validUntil: z.coerce.date().nullable().optional(),
  })
  .strict();

export type CreateCouponInput = z.infer<typeof createCouponSchema>;
export type UpdateCouponInput = z.infer<typeof updateCouponSchema>;
export type CouponPresenter = z.infer<typeof couponPresenterSchema>;

export const createCouponRawExample: CreateCouponInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  name: "Exemplo",
  description: "valor_exemplo",
  code: "CODE123",
  type: "valor_exemplo",
  discountPercentage: "valor_exemplo",
  fixedDiscount: 99.9,
  maxValue: 99.9,
  quantity: "valor_exemplo",
  validUntil: new Date("2026-04-28T12:00:00.000Z"),
};

export const couponPresenterRawExample: CouponPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  name: "Exemplo",
  description: "valor_exemplo",
  code: "CODE123",
  type: "valor_exemplo",
  discountPercentage: "valor_exemplo",
  fixedDiscount: 99.9,
  maxValue: 99.9,
  quantity: "valor_exemplo",
  validUntil: new Date("2026-04-28T12:00:00.000Z"),
};
