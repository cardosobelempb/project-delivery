// ============================================================
// user.schema.ts
// Schemas exclusivos da entidade User.
// Importa dos shared — zero duplicação de erros/paginação.
// ============================================================

import { z } from "zod";

import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { UserLevel } from "@/shared/enums/user-level.enum";
import { YesNoStatus } from "@/shared/enums/yes-no-status.enum";
import { IsoDateTimeInput, UUIDString } from "@/shared/schemas/helpers";
import {
  actionResponseSchema,
  createResponseSchema,
  findResponseSchema,
  pageResponseSchema,
  updateResponseSchema,
} from "@/shared/schemas/response.factory";

// ─── Params ───────────────────────────────────────────────────────────────────

export const UserParamsSchema = z.object({
  userId: UUIDString,
});

export type UserParams = z.infer<typeof UserParamsSchema>;

// ─── Schema base da entidade ──────────────────────────────────────────────────
//
// Fonte única de verdade para todos os schemas derivados.
//
// ⚠️  z.nativeEnum() — obrigatório para enums TypeScript.
//     z.enum() só aceita tuplas de string literal ["A","B"],
//     não enums compilados. Usar z.enum(EnumTS) quebra em runtime.

export const UserSchema = z
  .object({
    id: UUIDString,
    name: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    email: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    passwordHash: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    level: z.nativeEnum(UserLevel).optional(),
    operation: z.nativeEnum(YesNoStatus).optional(),
    status: z.nativeEnum(EntityStatus).optional(),
    recoverKey: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    keepAlive: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    commission: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    lastLoginAt: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    createdAt: IsoDateTimeInput.optional().nullable(),
    updatedAt: IsoDateTimeInput.optional().nullable(),
    deletedAt: IsoDateTimeInput.optional().nullable(),
  })
  .strict();

// ─── Body schemas (entrada) ───────────────────────────────────────────────────

// Payload de criação: sem campos gerados pelo servidor
export const CreateUserSchema = UserSchema.omit({
  id: true,
  status: true,
  level: true,
  operation: true,
  commission: true,
  keepAlive: true,
  recoverKey: true,
  lastLoginAt: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

// Payload de atualização: todos os campos opcionais
// Não precisa de .strict() extra — já herdado do UserSchema base
export const UpdateUserSchema = UserSchema.partial();

// ─── Response schemas (saída) ─────────────────────────────────────────────────

// Resposta completa: expõe tudo exceto campos de soft-delete
export const UserResponseSchema = UserSchema.omit({
  passwordHash: true, // Nunca exponha hashes de senha em respostas HTTP!
  deletedAt: true,
  updatedAt: true,
});

// Resumo para listagem: versão compacta — evita over-fetching
export const UserSummarySchema = UserSchema.pick({
  id: true,
  name: true,
  email: true,
  level: true,
  status: true,
});

// ─── Response wrappers via factory ───────────────────────────────────────────
//
// Cada wrapper envelopa UserResponseSchema (entidade completa),
// não o schema de input — a resposta de create/update devolve a entidade
// persistida, não o payload que o cliente enviou.

export const UserCreateResponseSchema =
  createResponseSchema(UserResponseSchema);
export const UserFindByIdResponseSchema =
  findResponseSchema(UserResponseSchema);
export const UserUpdateResponseSchema =
  updateResponseSchema(UserResponseSchema);
export const UserActivateResponseSchema = actionResponseSchema();
export const UserDeactivateResponseSchema = actionResponseSchema();
export const UserPageResponseSchema = pageResponseSchema(UserSummarySchema);

// ─── Tipos inferidos ──────────────────────────────────────────────────────────
//
// Nunca escreva tipos manualmente — inferidos diretamente dos schemas.
// Se o schema mudar, o tipo muda junto automaticamente.

export type UserDto = z.infer<typeof UserSchema>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
export type UserSummaryDto = z.infer<typeof UserSummarySchema>;
export type UserResponseDto = z.infer<typeof UserResponseSchema>;
export type UserCreateResponseDto = z.infer<typeof UserCreateResponseSchema>;
export type UserFindByIdResponseDto = z.infer<
  typeof UserFindByIdResponseSchema
>;
export type UserUpdateResponseDto = z.infer<typeof UserUpdateResponseSchema>;
export type UserActivateResponseDto = z.infer<
  typeof UserActivateResponseSchema
>;
export type UserDeactivateResponseDto = z.infer<
  typeof UserDeactivateResponseSchema
>;
export type UserPageResponseDto = z.infer<typeof UserPageResponseSchema>;
