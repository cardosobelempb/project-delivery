import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

export const yesNoStatusSchema = z.enum(["YES", "NO"]);

export const createIntegrationSchema = z
  .object({
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    analyticsCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pixelCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    customHtml: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    token: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(250, ValidatorMessage.MAX_VALUE)
      .optional(),
    accessToken: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(250, ValidatorMessage.MAX_VALUE)
      .optional(),
    mercadoPagoEnabled: yesNoStatusSchema.optional(),
    mercadoPagoSandbox: z.boolean().optional(),
    mercadoPagoPublicKey: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
    mercadoPagoSecretKey: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
    pagSeguroEnabled: yesNoStatusSchema.optional(),
    pagSeguroSandbox: z.boolean().optional(),
    pagSeguroEmail: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .email()
      .max(200)
      .optional(),
    pagSeguroToken: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
    mercadoPagoPixEnabled: yesNoStatusSchema.optional(),
    mercadoPagoPixToken: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(100, ValidatorMessage.MAX_VALUE)
      .optional(),
    getnetEnabled: yesNoStatusSchema.optional(),
    getnetSandbox: z.boolean().optional(),
    getnetClientId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
    getnetClientSecret: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
    getnetSellerId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(200, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updateIntegrationSchema = createIntegrationSchema
  .partial()
  .strict();

export const integrationPresenterSchema = createIntegrationSchema
  .extend({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
  })
  .strict();

export type CreateIntegrationInput = z.infer<typeof createIntegrationSchema>;
export type UpdateIntegrationInput = z.infer<typeof updateIntegrationSchema>;
export type IntegrationPresenter = z.infer<typeof integrationPresenterSchema>;

export const createIntegrationRawExample: CreateIntegrationInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  mercadoPagoEnabled: "NO",
  mercadoPagoSandbox: false,
};

export const integrationPresenterRawExample: IntegrationPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ...createIntegrationRawExample,
};
