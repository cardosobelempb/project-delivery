import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

/**
 * Validações Zod para User.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createUserSchema = z
  .object({
    name: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    email: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    passwordHash: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    level: z
      .enum(["OWNER", "ADMIN", "AFFILIATE", "OPERATOR", "CUSTOMER"])
      .optional(),
    operation: z.enum(["YES", "NO"]).optional(),
    status: z.enum(["ACTIVE", "INACTIVE", "BLOCKED", "DELETED"]).optional(),
    recoverKey: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    keepAlive: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    commission: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    lastLoginAt: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
  })
  .strict();

export const updateUserSchema = createUserSchema.partial().strict();

export const userPresenterSchema = z
  .object({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
    name: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    email: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    passwordHash: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    level: z
      .enum(["OWNER", "ADMIN", "AFFILIATE", "OPERATOR", "CUSTOMER"])
      .nullable()
      .optional(),
    operation: z.enum(["YES", "NO"]).nullable().optional(),
    status: z
      .enum(["ACTIVE", "INACTIVE", "BLOCKED", "DELETED"])
      .nullable()
      .optional(),
    recoverKey: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    keepAlive: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    commission: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    createdAt: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    lastLoginAt: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .nullable()
      .optional(),
    updatedAt: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
  })
  .strict();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserPresenter = z.infer<typeof userPresenterSchema>;

export const createUserRawExample: CreateUserInput = {
  name: "Exemplo",
  email: "cliente@example.com",
  passwordHash: "secret-value",
  level: "OWNER",
  operation: "YES",
  status: "ACTIVE",
  recoverKey: "secret-value",
  keepAlive: "example",
  commission: "example",
};

export const userPresenterRawExample: UserPresenter = {
  id: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  email: "cliente@example.com",
  passwordHash: "secret-value",
  level: "OWNER",
  operation: "YES",
  status: "ACTIVE",
  recoverKey: "secret-value",
  keepAlive: "example",
  commission: "example",
  createdAt: "2026-04-28T12:00:00.000Z",
  lastLoginAt: "2026-04-28T12:00:00.000Z",
  updatedAt: "2026-04-28T12:00:00.000Z",
};
