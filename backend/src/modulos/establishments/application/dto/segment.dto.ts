import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateSegmentDto {
  icon?: string;

  name?: string;

  ageRating?: string;
}

export interface UpdateSegmentDto extends DeepPartial<CreateSegmentDto> {}

export interface SegmentPresenterDto {
  id: string;

  icon?: string;

  name?: string;

  ageRating?: string;
}

export const createSegmentRawExample: CreateSegmentDto = {
  icon: "example",
  name: "Exemplo",
  ageRating: "example",
};

export const segmentPresenterRawExample: SegmentPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  icon: "example",
  name: "Exemplo",
  ageRating: "example",
};
