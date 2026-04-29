import { ValidatorMessage } from "@/common/domain/validations";
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
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    cityId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid().optional(),
    greetingCount: z.number().optional(),
    lastMessage: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    name: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    timestamp: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    triggerStatus: z.enum(["YES", "NO"]).optional(),
    includedAt: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    whatsapp: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    password: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    pointsQuantity: z.number().optional(),
    pointsOperations: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    ordersQuantity: z.number().optional(),
    active: z.boolean().optional(),
    zipCode: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    street: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    number: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    neighborhood: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    stateLegacyId: z.number().optional(),
    complement: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    reference: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    p256dh: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    auth: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    endpoint: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
  })
  .strict();

export const updateCustomerSchema = createCustomerSchema.partial().strict();

export const customerPresenterSchema = z
  .object({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    cityId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    greetingCount: z.number().nullable().optional(),
    lastMessage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    name: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    timestamp: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    triggerStatus: z.enum(["YES", "NO"]).nullable().optional(),
    includedAt: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    whatsapp: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    password: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    pointsQuantity: z.number().nullable().optional(),
    pointsOperations: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    ordersQuantity: z.number().nullable().optional(),
    active: z.boolean().nullable().optional(),
    zipCode: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    street: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    number: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    neighborhood: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    stateLegacyId: z.number().nullable().optional(),
    complement: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    reference: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    p256dh: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    auth: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    endpoint: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
  })
  .strict();

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export type CustomerPresenter = z.infer<typeof customerPresenterSchema>;

export const createCustomerRawExample: CreateCustomerInput = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  cityId: "00000000-0000-4000-8000-000000000000",
  greetingCount: 1,
  lastMessage: "example",
  name: "Exemplo",
  timestamp: "example",
  triggerStatus: "YES",
  includedAt: "2026-04-28T12:00:00.000Z",
  whatsapp: "85999999999",
  password: "secret-value",
  pointsQuantity: 10.5,
  pointsOperations: "example",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "example",
  number: "example",
  neighborhood: "example",
  stateLegacyId: 1,
  complement: "example",
  reference: "example",
  p256dh: "example",
  auth: "example",
  endpoint: "example",
};

export const customerPresenterRawExample: CustomerPresenter = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  cityId: "00000000-0000-4000-8000-000000000000",
  greetingCount: 1,
  lastMessage: "example",
  name: "Exemplo",
  timestamp: "example",
  triggerStatus: "YES",
  includedAt: "2026-04-28T12:00:00.000Z",
  whatsapp: "85999999999",
  password: "secret-value",
  pointsQuantity: 10.5,
  pointsOperations: "example",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "example",
  number: "example",
  neighborhood: "example",
  stateLegacyId: 1,
  complement: "example",
  reference: "example",
  p256dh: "example",
  auth: "example",
  endpoint: "example",
};
