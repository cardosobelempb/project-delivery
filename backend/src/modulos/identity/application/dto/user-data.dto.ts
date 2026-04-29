import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateUserDataDto {
  userId?: string;

  birthDate?: string;

  documentType?: "CPF" | "CNPJ" | "RG" | "OTHER";

  document?: string;

  stateLegacyId?: string;

  cityLegacyId?: string;

  phone?: string;

  commission?: string;

}

export interface UpdateUserDataDto extends DeepPartial<CreateUserDataDto> {}

export interface UserDataPresenterDto {
  id: string;

  userId?: string;

  birthDate?: string;

  documentType?: "CPF" | "CNPJ" | "RG" | "OTHER";

  document?: string;

  stateLegacyId?: string;

  cityLegacyId?: string;

  phone?: string;

  commission?: string;

}

export const createUserDataRawExample: CreateUserDataDto = {
  "userId": "00000000-0000-4000-8000-000000000000",
  "birthDate": "example",
  "documentType": "CPF",
  "document": "example",
  "stateLegacyId": "00000000-0000-4000-8000-000000000000",
  "cityLegacyId": "00000000-0000-4000-8000-000000000000",
  "phone": "85999999999",
  "commission": "example"
};

export const userDataPresenterRawExample: UserDataPresenterDto = {
  "id": "00000000-0000-4000-8000-000000000000",
  "userId": "00000000-0000-4000-8000-000000000000",
  "birthDate": "example",
  "documentType": "CPF",
  "document": "example",
  "stateLegacyId": "00000000-0000-4000-8000-000000000000",
  "cityLegacyId": "00000000-0000-4000-8000-000000000000",
  "phone": "85999999999",
  "commission": "example"
};
