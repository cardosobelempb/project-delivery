import { DeliveryMethodDto } from "@/shared/dto/delivery-method.dto";
import { OrderStatusDto } from "@/shared/dto/order-status.dto";
import { PaymentMethodDto } from "@/shared/dto/payment-method.dto";
import { PaymentStatusDto } from "@/shared/dto/payment-status.dto";
import { z } from "zod";

/**
 * Validações Zod para Order.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createOrderSchema = z
  .object({
    licenseId: z.coerce.number().int().optional(),
    segmentId: z.string().uuid().optional(),
    establishmentId: z.string().uuid().optional(),
    customerName: z.string().max(255).optional(),
    whatsapp: z.string().max(255).optional(),
    deliveryMethod: z.nativeEnum(DeliveryMethodDto).optional(),
    stateLegacy: z.string().max(255).optional(),
    cityLegacy: z.string().max(255).optional(),
    zipCode: z.string().max(255).optional(),
    addressNumber: z.string().max(255).optional(),
    neighborhood: z.string().max(255).optional(),
    street: z.string().max(255).optional(),
    complement: z.string().max(255).optional(),
    reference: z.string().max(255).optional(),
    paymentMethod: z.nativeEnum(PaymentMethodDto).optional(),
    paymentInfo: z.string().max(255).optional(),
    receipt: z.string().optional(),
    payloadJson: z.string().optional(),
    status: z.nativeEnum(OrderStatusDto).optional(),
    orderedAt: z.coerce.date().optional(),
    coupon: z.string().max(255).optional(),
    orderValue: z.union([z.number(), z.string()]).optional(),
    fee: z.coerce.number().optional(),
    tableNumber: z.coerce.number().int().optional(),
    publicStatus: z.string().max(2).optional(),
    integrated: z.coerce.number().int().optional(),
    message: z.string().max(250).optional(),
    paymentLink: z.string().max(400).optional(),
    paymentReference: z.string().max(120).optional(),
    paidAt: z.coerce.date().optional(),
    paymentStatus: z.nativeEnum(PaymentStatusDto).optional(),
    paymentType: z.string().max(25).optional(),
    paymentDetails: z.string().optional(),
  })
  .strict();

export const updateOrderSchema = createOrderSchema.partial().strict();

export const orderPresenterSchema = z
  .object({
    id: z.string().uuid(),
    licenseId: z.coerce.number().int().nullable().optional(),
    segmentId: z.string().uuid().nullable().optional(),
    establishmentId: z.string().uuid().nullable().optional(),
    customerName: z.string().max(255).nullable().optional(),
    whatsapp: z.string().max(255).nullable().optional(),
    deliveryMethod: z.nativeEnum(DeliveryMethodDto).nullable().optional(),
    stateLegacy: z.string().max(255).nullable().optional(),
    cityLegacy: z.string().max(255).nullable().optional(),
    zipCode: z.string().max(255).nullable().optional(),
    addressNumber: z.string().max(255).nullable().optional(),
    neighborhood: z.string().max(255).nullable().optional(),
    street: z.string().max(255).nullable().optional(),
    complement: z.string().max(255).nullable().optional(),
    reference: z.string().max(255).nullable().optional(),
    paymentMethod: z.nativeEnum(PaymentMethodDto).nullable().optional(),
    paymentInfo: z.string().max(255).nullable().optional(),
    receipt: z.string().nullable().optional(),
    payloadJson: z.string().nullable().optional(),
    status: z.nativeEnum(OrderStatusDto).nullable().optional(),
    orderedAt: z.coerce.date().nullable().optional(),
    coupon: z.string().max(255).nullable().optional(),
    orderValue: z.union([z.number(), z.string()]).nullable().optional(),
    fee: z.coerce.number().nullable().optional(),
    tableNumber: z.coerce.number().int().nullable().optional(),
    publicStatus: z.string().max(2).nullable().optional(),
    integrated: z.coerce.number().int().nullable().optional(),
    message: z.string().max(250).nullable().optional(),
    paymentLink: z.string().max(400).nullable().optional(),
    paymentReference: z.string().max(120).nullable().optional(),
    paidAt: z.coerce.date().nullable().optional(),
    paymentStatus: z.nativeEnum(PaymentStatusDto).nullable().optional(),
    paymentType: z.string().max(25).nullable().optional(),
    paymentDetails: z.string().nullable().optional(),
  })
  .strict();

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type UpdateOrderInput = z.infer<typeof updateOrderSchema>;
export type OrderPresenter = z.infer<typeof orderPresenterSchema>;

export const createOrderRawExample: CreateOrderInput = {
  licenseId: 1,
  segmentId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  customerName: "Exemplo",
  whatsapp: "85999999999",
  deliveryMethod: DeliveryMethodDto.DELIVERY,
  stateLegacy: "valor_exemplo",
  cityLegacy: "valor_exemplo",
  zipCode: "60000000",
  addressNumber: "valor_exemplo",
  neighborhood: "valor_exemplo",
  street: "valor_exemplo",
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  paymentMethod: PaymentMethodDto.MONEY,
  paymentInfo: "valor_exemplo",
  receipt: "valor_exemplo",
  payloadJson: "valor_exemplo",
  status: OrderStatusDto.PENDING,
  orderedAt: new Date("2026-04-28T12:00:00.000Z"),
  coupon: "valor_exemplo",
  orderValue: 99.9,
  fee: 10.5,
  tableNumber: 1,
  publicStatus: "valor_exemplo",
  integrated: 1,
  message: "valor_exemplo",
  paymentLink: "https://exemplo.com",
  paymentReference: "valor_exemplo",
  paidAt: new Date("2026-04-28T12:00:00.000Z"),
  paymentStatus: PaymentStatusDto.PENDING,
  paymentType: "valor_exemplo",
  paymentDetails: "valor_exemplo",
};

export const orderPresenterRawExample: OrderPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  licenseId: 1,
  segmentId: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  customerName: "Exemplo",
  whatsapp: "85999999999",
  deliveryMethod: DeliveryMethodDto.DELIVERY,
  stateLegacy: "valor_exemplo",
  cityLegacy: "valor_exemplo",
  zipCode: "60000000",
  addressNumber: "valor_exemplo",
  neighborhood: "valor_exemplo",
  street: "valor_exemplo",
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  paymentMethod: PaymentMethodDto.MONEY,
  paymentInfo: "valor_exemplo",
  receipt: "valor_exemplo",
  payloadJson: "valor_exemplo",
  status: OrderStatusDto.PENDING,
  orderedAt: new Date("2026-04-28T12:00:00.000Z"),
  coupon: "valor_exemplo",
  orderValue: 99.9,
  fee: 10.5,
  tableNumber: 1,
  publicStatus: "valor_exemplo",
  integrated: 1,
  message: "valor_exemplo",
  paymentLink: "https://exemplo.com",
  paymentReference: "valor_exemplo",
  paidAt: new Date("2026-04-28T12:00:00.000Z"),
  paymentStatus: PaymentStatusDto.PENDING,
  paymentType: "valor_exemplo",
  paymentDetails: "valor_exemplo",
};
