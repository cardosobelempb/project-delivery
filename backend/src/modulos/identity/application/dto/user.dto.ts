import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateUserDto {
  name?: string;

  email?: string;

  passwordHash?: string;

  level?: "OWNER" | "ADMIN" | "AFFILIATE" | "OPERATOR" | "CUSTOMER";

  operation?: "YES" | "NO";

  status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | "DELETED";

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

  level?: "OWNER" | "ADMIN" | "AFFILIATE" | "OPERATOR" | "CUSTOMER";

  operation?: "YES" | "NO";

  status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | "DELETED";

  recoverKey?: string;

  keepAlive?: string;

  commission?: string;

  createdAt?: Date | string;

  lastLoginAt?: Date | string;

  updatedAt?: Date | string;

}

export const createUserRawExample: CreateUserDto = {
  "name": "Exemplo",
  "email": "cliente@example.com",
  "passwordHash": "secret-value",
  "level": "OWNER",
  "operation": "YES",
  "status": "ACTIVE",
  "recoverKey": "secret-value",
  "keepAlive": "example",
  "commission": "example"
};

export const userPresenterRawExample: UserPresenterDto = {
  "id": "00000000-0000-4000-8000-000000000000",
  "name": "Exemplo",
  "email": "cliente@example.com",
  "passwordHash": "secret-value",
  "level": "OWNER",
  "operation": "YES",
  "status": "ACTIVE",
  "recoverKey": "secret-value",
  "keepAlive": "example",
  "commission": "example",
  "createdAt": "2026-04-28T12:00:00.000Z",
  "lastLoginAt": "2026-04-28T12:00:00.000Z",
  "updatedAt": "2026-04-28T12:00:00.000Z"
};
