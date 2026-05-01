import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { MediaTypeDto } from "@/shared/enums/media-type.enum";

export interface CreateMediaDto {
  type?: MediaTypeDto;

  establishmentId?: string;

  relatedId?: string;

  url?: string;
}

export interface UpdateMediaDto extends DeepPartial<CreateMediaDto> {}

export interface MediaPresenterDto {
  id: string;

  type?: MediaTypeDto;

  establishmentId?: string;

  relatedId?: string;

  url?: string;
}

export const createMediaRawExample: CreateMediaDto = {
  type: MediaTypeDto.PRODUCT,
  establishmentId: "00000000-0000-4000-8000-000000000000",
  relatedId: "00000000-0000-4000-8000-000000000000",
  url: "https://example.com/file.png",
};

export const mediaPresenterRawExample: MediaPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  type: MediaTypeDto.PRODUCT,
  establishmentId: "00000000-0000-4000-8000-000000000000",
  relatedId: "00000000-0000-4000-8000-000000000000",
  url: "https://example.com/file.png",
};
