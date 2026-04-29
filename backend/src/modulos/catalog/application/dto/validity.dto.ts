import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateValidityDto {
  day: string;

  month?: string;

  year?: string;

  productId?: string;

  establishmentId: string;

  quantity?: string;
}

export interface UpdateValidityDto extends DeepPartial<CreateValidityDto> {}

export interface ValidityPresenterDto {
  id: string;

  day: string;

  month?: string;

  year?: string;

  productId?: string;

  establishmentId: string;

  quantity?: string;
}

export const createValidityRawExample: CreateValidityDto = {
  day: "example",
  month: "example",
  year: "example",
  productId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  quantity: "example",
};

export const validityPresenterRawExample: ValidityPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  day: "example",
  month: "example",
  year: "example",
  productId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  quantity: "example",
};
