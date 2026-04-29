import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

export const yesNoStatusSchema = z.enum(["YES", "NO"]);
export const deliveryFeeTypeSchema = z.enum([
  "FIXED",
  "BY_DISTANCE",
  "BY_CEP",
  "MANUAL",
]);

export const createSettingSchema = z
  .object({
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    minimumOrder: z.number().nonnegative().optional(),
    acceptsMoney: yesNoStatusSchema.optional(),
    acceptsDebitCard: yesNoStatusSchema.optional(),
    debitCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsCreditCard: yesNoStatusSchema.optional(),
    creditCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsFoodCard: yesNoStatusSchema.optional(),
    foodCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsOtherPayment: yesNoStatusSchema.optional(),
    otherPaymentDescription: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsPix: yesNoStatusSchema.optional(),
    pixType: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pixKey: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(99, ValidatorMessage.MAX_VALUE)
      .optional(),
    pixBeneficiary: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(25, ValidatorMessage.MAX_VALUE)
      .optional(),
    establishmentPixData: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    businessHoursText: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    businessHoursJson: z.string(ValidatorMessage.REQUIRED_FIELD).optional(),
    allowPickup: yesNoStatusSchema.optional(),
    allowDelivery: yesNoStatusSchema.optional(),
    deliveryType: deliveryFeeTypeSchema.optional(),
    deliveryValue: z.number().nonnegative().optional(),
    productLimit: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    displayMode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(11, ValidatorMessage.MAX_VALUE)
      .optional(),
    deliveryName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pickupName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    tableName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    deliveryEnabled: yesNoStatusSchema.optional(),
    pickupEnabled: yesNoStatusSchema.optional(),
    tableEnabled: yesNoStatusSchema.optional(),
    otherEnabled: yesNoStatusSchema.optional(),
    otherName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    calculateShipping: yesNoStatusSchema.optional(),
    shippingType: deliveryFeeTypeSchema.optional(),
    shippingCompany: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(150, ValidatorMessage.MAX_VALUE)
      .optional(),
    shippingPassword: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .max(50, ValidatorMessage.MAX_VALUE)
      .optional(),
    validity: z.number().int().nonnegative().optional(),
    triggerCount: z.number().int().nonnegative().optional(),
  })
  .strict();

export const updateSettingSchema = createSettingSchema.partial().strict();

export const settingPresenterSchema = createSettingSchema
  .extend({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
  })
  .strict();

export type CreateSettingInput = z.infer<typeof createSettingSchema>;
export type UpdateSettingInput = z.infer<typeof updateSettingSchema>;
export type SettingPresenter = z.infer<typeof settingPresenterSchema>;

export const createSettingRawExample: CreateSettingInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  minimumOrder: 20,
  acceptsPix: "YES",
  deliveryEnabled: "YES",
};

export const settingPresenterRawExample: SettingPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ...createSettingRawExample,
};
