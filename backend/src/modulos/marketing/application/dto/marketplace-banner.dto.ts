import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { EntityStatusDto } from "@/common/shared/enums/entity-status.enum";

export interface CreateMarketplaceBannerDto {
  establishmentId?: string;

  cityId?: string;

  title?: string;

  desktopImage?: string;

  mobileImage?: string;

  videoLink?: string;

  link?: string;

  status: EntityStatusDto;
}

export interface UpdateMarketplaceBannerDto extends DeepPartial<CreateMarketplaceBannerDto> {}

export interface MarketplaceBannerPresenterDto {
  id: string;

  establishmentId?: string;

  cityId?: string;

  title?: string;

  desktopImage?: string;

  mobileImage?: string;

  videoLink?: string;

  link?: string;

  status: EntityStatusDto;

  createdAt?: Date | string;

  updatedAt?: Date | string;
}

export const createMarketplaceBannerRawExample: CreateMarketplaceBannerDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  cityId: "00000000-0000-4000-8000-000000000000",
  title: "example",
  desktopImage: "https://example.com/file.png",
  mobileImage: "https://example.com/file.png",
  videoLink: "https://example.com/file.png",
  link: "https://example.com/file.png",
  status: EntityStatusDto.ACTIVE,
};

export const marketplaceBannerPresenterRawExample: MarketplaceBannerPresenterDto =
  {
    id: "00000000-0000-4000-8000-000000000000",
    establishmentId: "00000000-0000-4000-8000-000000000000",
    cityId: "00000000-0000-4000-8000-000000000000",
    title: "example",
    desktopImage: "https://example.com/file.png",
    mobileImage: "https://example.com/file.png",
    videoLink: "https://example.com/file.png",
    link: "https://example.com/file.png",
    status: EntityStatusDto.ACTIVE,
    createdAt: "2026-04-28T12:00:00.000Z",
    updatedAt: "2026-04-28T12:00:00.000Z",
  };
