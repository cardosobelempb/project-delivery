import { DeepPartial } from "@/common/domain/types/DeepPartial";

export type YesNoStatusDto = "YES" | "NO";

export interface CreateFlagDto {
  establishmentId?: string;
  marketplaceFeature?: YesNoStatusDto;
  variationFeature?: YesNoStatusDto;
  bannerFeature?: YesNoStatusDto;
  triggerFeature?: YesNoStatusDto;
}

export interface UpdateFlagDto extends DeepPartial<CreateFlagDto> {}

export interface FlagPresenterDto extends CreateFlagDto {
  id: string;
}

export const createFlagRawExample: CreateFlagDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  marketplaceFeature: "YES",
  variationFeature: "YES",
  bannerFeature: "YES",
  triggerFeature: "YES",
};

export const flagPresenterRawExample: FlagPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  ...createFlagRawExample,
};
