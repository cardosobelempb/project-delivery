import { ValidatorMessage } from "@/common/domain/validations";
import { VoucherStatusDto } from "@/shared/enums/voucher-status.enum";
import { z } from "zod";

/**
 * Validações Zod para Voucher.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createVoucherSchema = z
  .object({
    planId: z.string().uuid().optional(),
    subscriptionId: z.string().uuid().optional(),
    description: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    code: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    status: z.nativeEnum(VoucherStatusDto).optional(),
    affiliate: z.string().max(5).optional(),
  })
  .strict();

export const updateVoucherSchema = createVoucherSchema.partial().strict();

export const voucherPresenterSchema = z
  .object({
    id: z.string().uuid(),
    planId: z.string().uuid().nullable().optional(),
    subscriptionId: z.string().uuid().nullable().optional(),
    description: z.string().max(255).nullable().optional(),
    code: z.string().max(255).nullable().optional(),
    status: z.nativeEnum(VoucherStatusDto).nullable().optional(),
    affiliate: z.string().max(5).nullable().optional(),
  })
  .strict();

export type CreateVoucherInput = z.infer<typeof createVoucherSchema>;
export type UpdateVoucherInput = z.infer<typeof updateVoucherSchema>;
export type VoucherPresenter = z.infer<typeof voucherPresenterSchema>;

export const createVoucherRawExample: CreateVoucherInput = {
  planId: "550e8400-e29b-41d4-a716-446655440000",
  subscriptionId: "550e8400-e29b-41d4-a716-446655440000",
  description: "valor_exemplo",
  code: "CODE123",
  status: VoucherStatusDto.UNUSED,
  affiliate: "valor_exemplo",
};

export const voucherPresenterRawExample: VoucherPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  planId: "550e8400-e29b-41d4-a716-446655440000",
  subscriptionId: "550e8400-e29b-41d4-a716-446655440000",
  description: "valor_exemplo",
  code: "CODE123",
  status: VoucherStatusDto.UNUSED,
  affiliate: "valor_exemplo",
};
