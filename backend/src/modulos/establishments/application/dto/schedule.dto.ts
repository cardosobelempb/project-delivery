import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { ScheduleActionDto } from "../../../../shared/enums/schedule-action.enum";

export interface CreateScheduleDto {
  establishmentId?: string;

  sunday?: boolean;

  monday?: boolean;

  tuesday?: boolean;

  wednesday?: boolean;

  thursday?: boolean;

  friday?: boolean;

  saturday?: boolean;

  time?: string;

  action?: ScheduleActionDto;
}

export interface UpdateScheduleDto extends DeepPartial<CreateScheduleDto> {}

export interface SchedulePresenterDto {
  id: string;

  establishmentId?: string;

  sunday?: boolean;

  monday?: boolean;

  tuesday?: boolean;

  wednesday?: boolean;

  thursday?: boolean;

  friday?: boolean;

  saturday?: boolean;

  time?: string;

  action?: ScheduleActionDto;
}

export const createScheduleRawExample: CreateScheduleDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  time: "example",
  action: ScheduleActionDto.OPEN,
};

export const schedulePresenterRawExample: SchedulePresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  time: "example",
  action: ScheduleActionDto.OPEN,
};
