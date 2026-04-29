import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";
import { z } from "zod";

/**
 * Validações Zod para Customer.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createCustomerSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    cityId: z.string().uuid().optional(),
    greetingCount: z.coerce.number().int().optional(),
    lastMessage: z.string().optional(),
    name: z.string().max(150).optional(),
    timestamp: z.string().max(255).optional(),
    triggerStatus: z.nativeEnum(YesNoStatusDto).optional(),
    includedAt: z.coerce.date().optional(),
    whatsapp: z.string().max(15).optional(),
    password: z.string().max(35).optional(),
    pointsQuantity: z.coerce.number().optional(),
    pointsOperations: z.string().optional(),
    ordersQuantity: z.coerce.number().int().optional(),
    active: z.coerce.boolean().optional(),
    zipCode: z.string().max(15).optional(),
    street: z.string().max(250).optional(),
    number: z.string().max(15).optional(),
    neighborhood: z.string().max(150).optional(),
    stateLegacyId: z.coerce.number().int().optional(),
    complement: z.string().max(250).optional(),
    reference: z.string().max(250).optional(),
    p256dh: z.string().max(350).optional(),
    auth: z.string().max(250).optional(),
    endpoint: z.string().optional(),
  })
  .strict();

export const updateCustomerSchema = createCustomerSchema.partial().strict();

export const customerPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    cityId: z.string().uuid().nullable().optional(),
    greetingCount: z.coerce.number().int().nullable().optional(),
    lastMessage: z.string().nullable().optional(),
    name: z.string().max(150).nullable().optional(),
    timestamp: z.string().max(255).nullable().optional(),
    triggerStatus: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    includedAt: z.coerce.date().nullable().optional(),
    whatsapp: z.string().max(15).nullable().optional(),
    password: z.string().max(35).nullable().optional(),
    pointsQuantity: z.coerce.number().nullable().optional(),
    pointsOperations: z.string().nullable().optional(),
    ordersQuantity: z.coerce.number().int().nullable().optional(),
    active: z.coerce.boolean().nullable().optional(),
    zipCode: z.string().max(15).nullable().optional(),
    street: z.string().max(250).nullable().optional(),
    number: z.string().max(15).nullable().optional(),
    neighborhood: z.string().max(150).nullable().optional(),
    stateLegacyId: z.coerce.number().int().nullable().optional(),
    complement: z.string().max(250).nullable().optional(),
    reference: z.string().max(250).nullable().optional(),
    p256dh: z.string().max(350).nullable().optional(),
    auth: z.string().max(250).nullable().optional(),
    endpoint: z.string().nullable().optional(),
  })
  .strict();

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export type CustomerPresenter = z.infer<typeof customerPresenterSchema>;

export const createCustomerRawExample: CreateCustomerInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  cityId: "550e8400-e29b-41d4-a716-446655440000",
  greetingCount: 1,
  lastMessage: "valor_exemplo",
  name: "Exemplo",
  timestamp: "valor_exemplo",
  triggerStatus: YesNoStatusDto.YES,
  includedAt: new Date("2026-04-28T12:00:00.000Z"),
  whatsapp: "85999999999",
  password: "senha_hash_exemplo",
  pointsQuantity: 10.5,
  pointsOperations: "valor_exemplo",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "valor_exemplo",
  number: "valor_exemplo",
  neighborhood: "valor_exemplo",
  stateLegacyId: 1,
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  p256dh: "valor_exemplo",
  auth: "valor_exemplo",
  endpoint: "valor_exemplo",
};

export const customerPresenterRawExample: CustomerPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  cityId: "550e8400-e29b-41d4-a716-446655440000",
  greetingCount: 1,
  lastMessage: "valor_exemplo",
  name: "Exemplo",
  timestamp: "valor_exemplo",
  triggerStatus: YesNoStatusDto.YES,
  includedAt: new Date("2026-04-28T12:00:00.000Z"),
  whatsapp: "85999999999",
  password: "senha_hash_exemplo",
  pointsQuantity: 10.5,
  pointsOperations: "valor_exemplo",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "valor_exemplo",
  number: "valor_exemplo",
  neighborhood: "valor_exemplo",
  stateLegacyId: 1,
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  p256dh: "valor_exemplo",
  auth: "valor_exemplo",
  endpoint: "valor_exemplo",
};
