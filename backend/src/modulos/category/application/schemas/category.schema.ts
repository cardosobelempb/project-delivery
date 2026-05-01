// ============================================================
// category.schema.ts
// Schemas exclusivos da entidade Category.
// Importa dos shared — zero duplicação de erros/paginação.
// ============================================================

import { z } from "zod";

import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { VisibilityStatus } from "@/shared/enums/visibility-status.enum";
import { IsoDateTimeInput, UUIDString } from "@/shared/schemas/helpers";
import {
  actionResponseSchema,
  createResponseSchema,
  findResponseSchema,
  pageResponseSchema,
  updateResponseSchema,
} from "@/shared/schemas/response.factory";

// ─── Params ───────────────────────────────────────────────────────────────────

export const CategoryParamsSchema = z.object({
  categoryId: UUIDString,
});

export type CategoryParams = z.infer<typeof CategoryParamsSchema>;

// ─── Schema base da entidade ──────────────────────────────────────────────────
//
// Fonte única de verdade para todos os schemas derivados.
//
// ⚠️  z.nativeEnum() — obrigatório para enums TypeScript.
//     z.enum() só aceita tuplas de string literal ["A","B"],
//     não enums compilados. Usar z.enum(EnumTS) quebra em runtime.

export const CategorySchema = z
  .object({
    id: UUIDString,
    establishmentId: UUIDString.optional().nullable(),
    patentId: UUIDString.optional().nullable(),
    order: z.coerce.number().int(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional()
      .nullable(),
    slug: z.string().optional().nullable(),
    visible: z.nativeEnum(VisibilityStatus).optional(), // ← era z.enum (bug)
    status: z.nativeEnum(EntityStatus).optional(), // ← era z.enum (bug)
    createdAt: IsoDateTimeInput.optional(),
    updatedAt: IsoDateTimeInput.optional().nullable(),
    deletedAt: IsoDateTimeInput.optional().nullable(),
  })
  .strict();

// ─── Body schemas (entrada) ───────────────────────────────────────────────────

// Payload de criação: sem campos gerados pelo servidor
export const CreateCategorySchema = CategorySchema.omit({
  id: true,
  status: true,
  visible: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

// Payload de atualização: todos os campos opcionais
// Não precisa de .strict() extra — já herdado do CategorySchema base
export const UpdateCategorySchema = CreateCategorySchema.partial();

// ─── Response schemas (saída) ─────────────────────────────────────────────────

// Resposta completa: expõe tudo exceto campos de soft-delete
export const CategoryResponseSchema = CategorySchema.omit({
  deletedAt: true,
  updatedAt: true,
});

// Resumo para listagem: versão compacta — evita over-fetching
export const CategorySummarySchema = CategorySchema.pick({
  id: true,
  establishmentId: true,
  order: true,
  name: true,
  visible: true,
  status: true,
});

// ─── Response wrappers via factory ───────────────────────────────────────────
//
// Cada wrapper envelopa CategoryResponseSchema (entidade completa),
// não o schema de input — a resposta de create/update devolve a entidade
// persistida, não o payload que o cliente enviou.

export const CategoryCreateResponseSchema = createResponseSchema(
  CategoryResponseSchema,
);
export const CategoryFindByIdResponseSchema = findResponseSchema(
  CategoryResponseSchema,
);
export const CategoryUpdateResponseSchema = updateResponseSchema(
  CategoryResponseSchema,
);
export const CategoryActivateResponseSchema = actionResponseSchema();
export const CategoryDeactivateResponseSchema = actionResponseSchema();
export const CategoryPageResponseSchema = pageResponseSchema(
  CategorySummarySchema,
);

// ─── Tipos inferidos ──────────────────────────────────────────────────────────
//
// Nunca escreva tipos manualmente — inferidos diretamente dos schemas.
// Se o schema mudar, o tipo muda junto automaticamente.

export type CategoryDto = z.infer<typeof CategorySchema>;
export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryDto = z.infer<typeof UpdateCategorySchema>;
export type CategorySummaryDto = z.infer<typeof CategorySummarySchema>;
export type CategoryResponseDto = z.infer<typeof CategoryResponseSchema>;
export type CategoryCreateResponseDto = z.infer<
  typeof CategoryCreateResponseSchema
>;
export type CategoryFindByIdResponseDto = z.infer<
  typeof CategoryFindByIdResponseSchema
>;
export type CategoryUpdateResponseDto = z.infer<
  typeof CategoryUpdateResponseSchema
>;
export type CategoryActivateResponseDto = z.infer<
  typeof CategoryActivateResponseSchema
>;
export type CategoryDeactivateResponseDto = z.infer<
  typeof CategoryDeactivateResponseSchema
>;
export type CategoryPageResponseDto = z.infer<
  typeof CategoryPageResponseSchema
>;
