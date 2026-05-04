import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { EntityStatusDto } from "@/common/shared/enums/entity-status.enum";
import { VisibilityStatusDto } from "@/common/shared/enums/visibility-status.enum";

export interface CreateCategoryDto {
  establishmentId?: string;

  order: number;

  name?: string;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  sunday: boolean;

  monday: boolean;

  tuesday: boolean;

  wednesday: boolean;

  thursday: boolean;

  friday: boolean;

  saturday: boolean;

  holidays: boolean;
}

export interface UpdateCategoryDto extends DeepPartial<CreateCategoryDto> {}

export interface CategoryPresenterDto {
  id: string;

  establishmentId?: string;

  order: number;

  name?: string;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  updatedAt?: Date | string;

  sunday: boolean;

  monday: boolean;

  tuesday: boolean;

  wednesday: boolean;

  thursday: boolean;

  friday: boolean;

  saturday: boolean;

  holidays: boolean;
}

export const createCategoryRawExample: CreateCategoryDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  order: 1,
  name: "Exemplo",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  holidays: true,
};

export const categoryPresenterRawExample: CategoryPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  order: 1,
  name: "Exemplo",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  updatedAt: "2026-04-28T12:00:00.000Z",
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  holidays: true,
};
