import { ValidatorMessage } from "@/common/domain/validations";
import { z } from "zod";

export const yesNoStatusSchema = z.enum(["YES", "NO"]);

export const createFlagSchema = z
  .object({
    establishmentId: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .uuid()
      .optional(),
    marketplaceFeature: yesNoStatusSchema.optional(),
    variationFeature: yesNoStatusSchema.optional(),
    bannerFeature: yesNoStatusSchema.optional(),
    triggerFeature: yesNoStatusSchema.optional(),
  })
  .strict();

export const updateFlagSchema = createFlagSchema.partial().strict();

export const flagPresenterSchema = createFlagSchema
  .extend({
    id: z.string(ValidatorMessage.REQUIRED_FIELD).uuid(),
  })
  .strict();

export type CreateFlagInput = z.infer<typeof createFlagSchema>;
export type UpdateFlagInput = z.infer<typeof updateFlagSchema>;
export type FlagPresenter = z.infer<typeof flagPresenterSchema>;

export const createFlagRawExample: CreateFlagInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  marketplaceFeature: "YES",
  triggerFeature: "YES",
};

export const flagPresenterRawExample: FlagPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ...createFlagRawExample,
};
