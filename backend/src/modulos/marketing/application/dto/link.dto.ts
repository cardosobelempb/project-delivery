import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateLinkDto {
  url?: string;

  name?: string;
}

export interface UpdateLinkDto extends DeepPartial<CreateLinkDto> {}

export interface LinkPresenterDto {
  id: string;

  url?: string;

  name?: string;
}

export const createLinkRawExample: CreateLinkDto = {
  url: "https://example.com/file.png",
  name: "Exemplo",
};

export const linkPresenterRawExample: LinkPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  url: "https://example.com/file.png",
  name: "Exemplo",
};
