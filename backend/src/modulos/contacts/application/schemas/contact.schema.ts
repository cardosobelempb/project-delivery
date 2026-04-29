import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

export const createContactSchema = z.object({
  establishmentId: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(ValidatorMessage.INVALID_UUID).optional(),
  whatsapp: z.string(ValidatorMessage.REQUIRED_FIELD).max(255, ValidatorMessage.MAX_VALUE).optional(),
  email: z.string(ValidatorMessage.REQUIRED_FIELD).email().max(255).optional(),
  instagram: z.string(ValidatorMessage.REQUIRED_FIELD).max(255, ValidatorMessage.MAX_VALUE).optional(),
  facebook: z.string(ValidatorMessage.REQUIRED_FIELD).max(255, ValidatorMessage.MAX_VALUE).optional(),
  youtube: z.string(ValidatorMessage.REQUIRED_FIELD).max(255, ValidatorMessage.MAX_VALUE).optional(),
}).strict();

export const updateContactSchema = createContactSchema.partial().strict();

export const contactPresenterSchema = createContactSchema.extend({
  id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(ValidatorMessage.INVALID_UUID),
}).strict();

export type CreateContactInput = z.infer<typeof createContactSchema>;
export type UpdateContactInput = z.infer<typeof updateContactSchema>;
export type ContactPresenter = z.infer<typeof contactPresenterSchema>;

export const createContactRawExample: CreateContactInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  whatsapp: "5599999999999",
  email: "contato@exemplo.com",
};

export const contactPresenterRawExample: ContactPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ...createContactRawExample,
};
