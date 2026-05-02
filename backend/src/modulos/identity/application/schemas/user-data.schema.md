import { ValidatorMessage } from "@/common/domain/validations";
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
    userId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid().optional(),
    birthDate: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    documentType: z.enum(["CPF", "CNPJ", "RG", "OTHER"]).optional(),
    document: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    stateLegacyId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid().optional(),
    cityLegacyId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid().optional(),
    phone: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    commission: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
  })
  .strict();

export const updateUserDataSchema = createUserDataSchema.partial().strict();

export const userDataPresenterSchema = z
  .object({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
    userId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    birthDate: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    documentType: z.enum(["CPF", "CNPJ", "RG", "OTHER"]).nullable().optional(),
    document: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    stateLegacyId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    cityLegacyId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .nullable()
      .optional(),
    phone: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
    commission: z.string(ValidatorMessage.REQUIRED_FIELD).nullable().optional(),
  })
  .strict();

export type CreateUserDataInput = z.infer<typeof createUserDataSchema>;
export type UpdateUserDataInput = z.infer<typeof updateUserDataSchema>;
export type UserDataPresenter = z.infer<typeof userDataPresenterSchema>;

export const createUserDataRawExample: CreateUserDataInput = {
  userId: "00000000-0000-4000-8000-000000000000",
  birthDate: "example",
  documentType: "CPF",
  document: "example",
  stateLegacyId: "00000000-0000-4000-8000-000000000000",
  cityLegacyId: "00000000-0000-4000-8000-000000000000",
  phone: "85999999999",
  commission: "example",
};

export const userDataPresenterRawExample: UserDataPresenter = {
  id: "00000000-0000-4000-8000-000000000000",
  userId: "00000000-0000-4000-8000-000000000000",
  birthDate: "example",
  documentType: "CPF",
  document: "example",
  stateLegacyId: "00000000-0000-4000-8000-000000000000",
  cityLegacyId: "00000000-0000-4000-8000-000000000000",
  phone: "85999999999",
  commission: "example",
};
