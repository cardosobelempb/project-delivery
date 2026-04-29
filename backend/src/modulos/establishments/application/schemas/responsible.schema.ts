import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

export const documentTypeSchema = z.enum(["CPF", "CNPJ", "RG", "OTHER"]);

export const createResponsibleSchema = z
  .object({
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    birthDate: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    documentType: documentTypeSchema.optional(),
    document: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updateResponsibleSchema = createResponsibleSchema
  .partial()
  .strict();

export const responsiblePresenterSchema = createResponsibleSchema
  .extend({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
  })
  .strict();

export type CreateResponsibleInput = z.infer<typeof createResponsibleSchema>;
export type UpdateResponsibleInput = z.infer<typeof updateResponsibleSchema>;
export type ResponsiblePresenter = z.infer<typeof responsiblePresenterSchema>;

export const createResponsibleRawExample: CreateResponsibleInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  name: "Responsável Exemplo",
  documentType: "CPF",
  document: "000.000.000-00",
};

export const responsiblePresenterRawExample: ResponsiblePresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ...createResponsibleRawExample,
};
