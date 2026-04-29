import { PaymentGatewayDto } from "@/shared/dto/payment-gateway.dto";
import { PaymentStatusDto } from "@/shared/dto/payment-status.dto";
import { z } from "zod";

/**
 * Validações Zod para Payment.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createPaymentSchema = z
  .object({
    establishmentId: z.string().uuid(),
    orderId: z.string().uuid(),
    date: z.string().max(200),
    time: z.string().max(200),
    value: z.string().max(200),
    gateway: z.nativeEnum(PaymentGatewayDto),
    code: z.string().max(200),
    status: z.nativeEnum(PaymentStatusDto).optional(),
  })
  .strict();

export const updatePaymentSchema = createPaymentSchema.partial().strict();

export const paymentPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid(),
    orderId: z.string().uuid(),
    date: z.string().max(200),
    time: z.string().max(200),
    value: z.string().max(200),
    gateway: z.nativeEnum(PaymentGatewayDto),
    code: z.string().max(200),
    status: z.nativeEnum(PaymentStatusDto).nullable().optional(),
  })
  .strict();

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;
export type PaymentPresenter = z.infer<typeof paymentPresenterSchema>;

export const createPaymentRawExample: CreatePaymentInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  orderId: "550e8400-e29b-41d4-a716-446655440000",
  date: "valor_exemplo",
  time: "valor_exemplo",
  value: "valor_exemplo",
  gateway: PaymentGatewayDto.MERCADO_PAGO,
  code: "CODE123",
  status: PaymentStatusDto.PENDING,
};

export const paymentPresenterRawExample: PaymentPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  orderId: "550e8400-e29b-41d4-a716-446655440000",
  date: "valor_exemplo",
  time: "valor_exemplo",
  value: "valor_exemplo",
  gateway: PaymentGatewayDto.MERCADO_PAGO,
  code: "CODE123",
  status: PaymentStatusDto.PENDING,
};
