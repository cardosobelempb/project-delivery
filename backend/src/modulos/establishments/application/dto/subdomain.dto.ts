import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { DomainTypeDto } from "../../../../shared/enums/domain-type.enum";

export interface CreateSubdomainDto {
  relatedId?: string;

  type?: DomainTypeDto;

  subdomain?: string;

  url?: string;
}

export interface UpdateSubdomainDto extends DeepPartial<CreateSubdomainDto> {}

export interface SubdomainPresenterDto {
  id: string;

  relatedId?: string;

  type?: DomainTypeDto;

  subdomain?: string;

  url?: string;
}

export const createSubdomainRawExample: CreateSubdomainDto = {
  relatedId: "00000000-0000-4000-8000-000000000000",
  type: DomainTypeDto.STORE,
  subdomain: "example",
  url: "https://example.com/file.png",
};

export const subdomainPresenterRawExample: SubdomainPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  relatedId: "00000000-0000-4000-8000-000000000000",
  type: DomainTypeDto.STORE,
  subdomain: "example",
  url: "https://example.com/file.png",
};
