import { EntityStatusDto } from "@/shared/dto/entity-status.dto";
import { UserLevelDto } from "@/shared/dto/user-level.dto";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";
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
    name: z.string().max(255).optional(),
    email: z.string().max(255).email().optional(),
    passwordHash: z.string().max(255).optional(),
    level: z.nativeEnum(UserLevelDto).optional(),
    operation: z.nativeEnum(YesNoStatusDto).optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    recoverKey: z.string().max(255).optional(),
    keepAlive: z.string().max(255).optional(),
    commission: z.string().max(255).optional(),
    createdAt: z.coerce.date().optional(),
    lastLoginAt: z.coerce.date().optional(),
  })
  .strict();

export const updateUserSchema = createUserSchema.partial().strict();

export const userPresenterSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().max(255).nullable().optional(),
    email: z.string().max(255).email().nullable().optional(),
    passwordHash: z.string().max(255).nullable().optional(),
    level: z.nativeEnum(UserLevelDto).nullable().optional(),
    operation: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    status: z.nativeEnum(EntityStatusDto).nullable().optional(),
    recoverKey: z.string().max(255).nullable().optional(),
    keepAlive: z.string().max(255).nullable().optional(),
    commission: z.string().max(255).nullable().optional(),
    createdAt: z.coerce.date().nullable().optional(),
    lastLoginAt: z.coerce.date().nullable().optional(),
    updatedAt: z.coerce.date().nullable().optional(),
  })
  .strict();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserPresenter = z.infer<typeof userPresenterSchema>;

export const createUserRawExample: CreateUserInput = {
  name: "Exemplo",
  email: "contato@exemplo.com",
  passwordHash: "senha_hash_exemplo",
  level: UserLevelDto.OWNER,
  operation: YesNoStatusDto.YES,
  status: EntityStatusDto.ACTIVE,
  recoverKey: "valor_exemplo",
  keepAlive: "valor_exemplo",
  commission: "valor_exemplo",
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  lastLoginAt: new Date("2026-04-28T12:00:00.000Z"),
};

export const userPresenterRawExample: UserPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Exemplo",
  email: "contato@exemplo.com",
  passwordHash: "senha_hash_exemplo",
  level: UserLevelDto.OWNER,
  operation: YesNoStatusDto.YES,
  status: EntityStatusDto.ACTIVE,
  recoverKey: "valor_exemplo",
  keepAlive: "valor_exemplo",
  commission: "valor_exemplo",
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  lastLoginAt: new Date("2026-04-28T12:00:00.000Z"),
  updatedAt: new Date("2026-04-28T12:00:00.000Z"),
};
