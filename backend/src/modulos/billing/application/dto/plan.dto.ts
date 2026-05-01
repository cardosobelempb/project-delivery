import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { EntityStatusDto } from "@/shared/enums/entity-status.enum";
import { VisibilityStatusDto } from "@/shared/enums/visibility-status.enum";
import { YesNoStatusDto } from "@/shared/enums/yes-no-status.enum";

export interface CreatePlanDto {
  highlighted?: YesNoStatusDto;

  name?: string;

  description?: string;

  commission?: string;

  durationMonths?: string;

  durationDays?: string;

  totalValue?: number | string;

  monthlyValue?: number | string;

  link?: string;

  terms?: string;

  marketplaceFeature?: YesNoStatusDto;

  variationFeature?: YesNoStatusDto;

  bannerFeature?: YesNoStatusDto;

  triggerFeature: YesNoStatusDto;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  order?: string;

  productLimit?: string;
}

export interface UpdatePlanDto extends DeepPartial<CreatePlanDto> {}

export interface PlanPresenterDto {
  id: string;

  highlighted?: YesNoStatusDto;

  name?: string;

  description?: string;

  commission?: string;

  durationMonths?: string;

  durationDays?: string;

  totalValue?: number | string;

  monthlyValue?: number | string;

  link?: string;

  terms?: string;

  marketplaceFeature?: YesNoStatusDto;

  variationFeature?: YesNoStatusDto;

  bannerFeature?: YesNoStatusDto;

  triggerFeature: YesNoStatusDto;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  order?: string;

  productLimit?: string;
}

export const createPlanRawExample: CreatePlanDto = {
  highlighted: YesNoStatusDto.YES,
  name: "Exemplo",
  description: "example",
  commission: "example",
  durationMonths: "example",
  durationDays: "example",
  totalValue: 10.5,
  monthlyValue: 10.5,
  link: "https://example.com/file.png",
  terms: "example",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  order: "example",
  productLimit: "example",
};

export const planPresenterRawExample: PlanPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  highlighted: YesNoStatusDto.YES,
  name: "Exemplo",
  description: "example",
  commission: "example",
  durationMonths: "example",
  durationDays: "example",
  totalValue: 10.5,
  monthlyValue: 10.5,
  link: "https://example.com/file.png",
  terms: "example",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  order: "example",
  productLimit: "example",
};
