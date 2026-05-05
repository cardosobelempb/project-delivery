// ============================================================
// account.schema.ts
// Schemas exclusivos da entidade Account.
// Importa dos shared — zero duplicação de erros/paginação.
// ============================================================

import { z } from "zod";

import { ValidatorMessage } from "@/common/domain/validations/ValidatorMessage";
import { ProviderType } from "@/common/shared/enums/provider-type.enum";
import { TokenType } from "@/common/shared/enums/token-type.enum";
import { IsoDateTimeInput, UUIDString } from "@/common/shared/schemas/helpers";
import {
  actionResponseSchema,
  createResponseSchema,
  findResponseSchema,
  pageResponseSchema,
  updateResponseSchema,
} from "@/common/shared/schemas/response.factory";

// ─── Params ───────────────────────────────────────────────────────────────────

export const AccountParamsSchema = z.object({
  accountId: UUIDString,
});

export type AccountParams = z.infer<typeof AccountParamsSchema>;

// ─── Schema base da entidade ──────────────────────────────────────────────────
//
// Fonte única de verdade para todos os schemas derivados.
//
// ⚠️  z.nativeEnum() — obrigatório para enums TypeScript.
//     z.enum() só aceita tuplas de string literal ["A","B"],
//     não enums compilados. Usar z.enum(EnumTS) quebra em runtime.

export const AccountSchema = z
  .object({
    id: UUIDString,
    userId: UUIDString,
    provider: z.string().max(100, {
      message: ValidatorMessage.MAX_LENGTH,
    }),
    providerAccountId: z.string().max(255, {
      message: ValidatorMessage.MAX_LENGTH,
    }),
    providerType: z.enum(ProviderType).nullable(),
    refreshToken: z
      .string()
      .max(255, {
        message: ValidatorMessage.MAX_LENGTH,
      })
      .nullable(),
    accessToken: z
      .string()
      .max(255, {
        message: ValidatorMessage.MAX_LENGTH,
      })
      .nullable(),
    expiresAt: z.number().int().positive().nullable(),
    tokenType: z.enum(TokenType).nullable(),
    scope: z
      .string()
      .max(255, {
        message: ValidatorMessage.MAX_LENGTH,
      })
      .nullable(),
    idToken: z
      .string()
      .max(255, {
        message: ValidatorMessage.MAX_LENGTH,
      })
      .nullable(),
    sessionState: z
      .string()
      .max(255, {
        message: ValidatorMessage.MAX_LENGTH,
      })
      .nullable(),
    createdAt: IsoDateTimeInput,
    updatedAt: IsoDateTimeInput.nullable(),
    deletedAt: IsoDateTimeInput.nullable(),
  })
  .strict();

// ─── Body schemas (entrada) ───────────────────────────────────────────────────

// Payload de criação: sem campos gerados pelo servidor
export const CreateAccountSchema = AccountSchema.omit({
  id: true,
  refreshToken: true,
  accessToken: true,
  expiresAt: true,
  tokenType: true,
  scope: true,
  idToken: true,
  sessionState: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

// Payload de atualização: todos os campos opcionais
// Não precisa de .strict() extra — já herdado do AccountSchema base
export const UpdateAccountSchema = AccountSchema.partial();

// ─── Response schemas (saída) ─────────────────────────────────────────────────

// Resposta completa: expõe tudo exceto campos de soft-delete
export const AccountResponseSchema = AccountSchema.omit({
  updatedAt: true,
  deletedAt: true,
});

// Resumo para listagem: versão compacta — evita over-fetching
export const AccountSummarySchema = AccountSchema.pick({
  id: true,
  provider: true,
  providerAccountId: true,
  providerType: true,
});

// ─── Response wrappers via factory ───────────────────────────────────────────
//
// Cada wrapper envelopa AccountResponseSchema (entidade completa),
// não o schema de input — a resposta de create/update devolve a entidade
// persistida, não o payload que o cliente enviou.

export const AccountCreateResponseSchema = createResponseSchema(
  AccountResponseSchema,
);
export const AccountFindByIdResponseSchema = findResponseSchema(
  AccountResponseSchema,
);
export const AccountUpdateResponseSchema = updateResponseSchema(
  AccountResponseSchema,
);
export const AccountActivateResponseSchema = actionResponseSchema();
export const AccountDeactivateResponseSchema = actionResponseSchema();
export const AccountPageResponseSchema =
  pageResponseSchema(AccountSummarySchema);

// ─── Tipos inferidos ──────────────────────────────────────────────────────────
//
// Nunca escreva tipos manualmente — inferidos diretamente dos schemas.
// Se o schema mudar, o tipo muda junto automaticamente.

export type AccountDto = z.infer<typeof AccountSchema>;
export type CreateAccountDto = z.infer<typeof CreateAccountSchema>;
export type UpdateAccountDto = z.infer<typeof UpdateAccountSchema>;
export type AccountSummaryDto = z.infer<typeof AccountSummarySchema>;
export type AccountResponseDto = z.infer<typeof AccountResponseSchema>;
export type AccountCreateResponseDto = z.infer<
  typeof AccountCreateResponseSchema
>;
export type AccountFindByIdResponseDto = z.infer<
  typeof AccountFindByIdResponseSchema
>;
export type AccountUpdateResponseDto = z.infer<
  typeof AccountUpdateResponseSchema
>;
export type AccountActivateResponseDto = z.infer<
  typeof AccountActivateResponseSchema
>;
export type AccountDeactivateResponseDto = z.infer<
  typeof AccountDeactivateResponseSchema
>;
export type AccountPageResponseDto = z.infer<typeof AccountPageResponseSchema>;
