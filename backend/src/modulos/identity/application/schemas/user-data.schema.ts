import { DocumentTypeDto } from "@/shared/dto/document-type.dto";
import { z } from "zod";

/**
 * Validações Zod para UserData.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createUserDataSchema = z
  .object({
    userId: z.string().uuid(),
    birthDate: z.string().max(255).optional(),
    documentType: z.nativeEnum(DocumentTypeDto).optional(),
    document: z.string().max(255).optional(),
    stateLegacyId: z.string().uuid().max(255).optional(),
    cityLegacyId: z.string().uuid().max(255).optional(),
    phone: z.string().max(255).optional(),
    commission: z.string().max(255).optional(),
  })
  .strict();

export const updateUserDataSchema = createUserDataSchema.partial().strict();

export const userDataPresenterSchema = z
  .object({
    id: z.string().uuid(),
    userId: z.string().uuid(),
    birthDate: z.string().max(255).nullable().optional(),
    documentType: z.nativeEnum(DocumentTypeDto).nullable().optional(),
    document: z.string().max(255).nullable().optional(),
    stateLegacyId: z.string().uuid().max(255).nullable().optional(),
    cityLegacyId: z.string().uuid().max(255).nullable().optional(),
    phone: z.string().max(255).nullable().optional(),
    commission: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreateUserDataInput = z.infer<typeof createUserDataSchema>;
export type UpdateUserDataInput = z.infer<typeof updateUserDataSchema>;
export type UserDataPresenter = z.infer<typeof userDataPresenterSchema>;

export const createUserDataRawExample: CreateUserDataInput = {
  userId: "550e8400-e29b-41d4-a716-446655440000",
  birthDate: "valor_exemplo",
  documentType: DocumentTypeDto.CPF,
  document: "valor_exemplo",
  stateLegacyId: "550e8400-e29b-41d4-a716-446655440000",
  cityLegacyId: "550e8400-e29b-41d4-a716-446655440000",
  phone: "85999999999",
  commission: "valor_exemplo",
};

export const userDataPresenterRawExample: UserDataPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  userId: "550e8400-e29b-41d4-a716-446655440000",
  birthDate: "valor_exemplo",
  documentType: DocumentTypeDto.CPF,
  document: "valor_exemplo",
  stateLegacyId: "550e8400-e29b-41d4-a716-446655440000",
  cityLegacyId: "550e8400-e29b-41d4-a716-446655440000",
  phone: "85999999999",
  commission: "valor_exemplo",
};
