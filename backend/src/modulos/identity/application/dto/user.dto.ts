import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { EntityStatusDto } from "@/shared/dto/entity-status.dto";
import { UserLevelDto } from "@/shared/dto/user-level.dto";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";

export interface CreateUserDto {
  name?: string;

  email?: string;

  passwordHash?: string;

  level: UserLevelDto;

  operation: YesNoStatusDto;

  status: EntityStatusDto;

  recoverKey?: string;

  keepAlive?: string;

  commission?: string;

  lastLoginAt?: Date | string;
}

export interface UpdateUserDto extends DeepPartial<CreateUserDto> {}

export interface UserPresenterDto {
  id: string;

  name?: string;

  email?: string;

  passwordHash?: string;

  level: UserLevelDto;

  operation: YesNoStatusDto;

  status: EntityStatusDto;

  recoverKey?: string;

  keepAlive?: string;

  commission?: string;

  createdAt?: Date | string;

  lastLoginAt?: Date | string;

  updatedAt?: Date | string;
}

export const createUserRawExample: CreateUserDto = {
  name: "Exemplo",
  email: "cliente@example.com",
  passwordHash: "secret-value",
  level: UserLevelDto.OWNER,
  operation: YesNoStatusDto.YES,
  status: EntityStatusDto.ACTIVE,
  recoverKey: "secret-value",
  keepAlive: "example",
  commission: "example",
};

export const userPresenterRawExample: UserPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  email: "cliente@example.com",
  passwordHash: "secret-value",
  level: UserLevelDto.OWNER,
  operation: YesNoStatusDto.YES,
  status: EntityStatusDto.ACTIVE,
  recoverKey: "secret-value",
  keepAlive: "example",
  commission: "example",
  createdAt: "2026-04-28T12:00:00.000Z",
  lastLoginAt: "2026-04-28T12:00:00.000Z",
  updatedAt: "2026-04-28T12:00:00.000Z",
};
