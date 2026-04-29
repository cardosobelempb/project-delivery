import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateLogDto {
  userId?: string;

  establishmentId?: string;

  info?: string;

}

export interface UpdateLogDto extends DeepPartial<CreateLogDto> {}

export interface LogPresenterDto {
  id: string;

  userId?: string;

  establishmentId?: string;

  info?: string;

  createdAt?: Date | string;

}

export const createLogRawExample: CreateLogDto = {
  "userId": "00000000-0000-4000-8000-000000000000",
  "establishmentId": "00000000-0000-4000-8000-000000000000",
  "info": "example"
};

export const logPresenterRawExample: LogPresenterDto = {
  "id": "00000000-0000-4000-8000-000000000000",
  "userId": "00000000-0000-4000-8000-000000000000",
  "establishmentId": "00000000-0000-4000-8000-000000000000",
  "info": "example",
  "createdAt": "2026-04-28T12:00:00.000Z"
};
