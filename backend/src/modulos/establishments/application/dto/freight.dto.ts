import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateFreightDto {
  establishmentId?: string;

  name?: string;

  value?: number | string;

  other?: boolean;

}

export interface UpdateFreightDto extends DeepPartial<CreateFreightDto> {}

export interface FreightPresenterDto {
  id: string;

  establishmentId?: string;

  name?: string;

  value?: number | string;

  other?: boolean;

}

export const createFreightRawExample: CreateFreightDto = {
  "establishmentId": "00000000-0000-4000-8000-000000000000",
  "name": "Exemplo",
  "value": 10.5,
  "other": true
};

export const freightPresenterRawExample: FreightPresenterDto = {
  "id": "00000000-0000-4000-8000-000000000000",
  "establishmentId": "00000000-0000-4000-8000-000000000000",
  "name": "Exemplo",
  "value": 10.5,
  "other": true
};
