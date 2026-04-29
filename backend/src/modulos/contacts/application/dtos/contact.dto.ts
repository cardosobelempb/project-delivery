import { DeepPartial } from "@/common/domain/types/DeepPartial";

export interface CreateContactDto {
  establishmentId?: string;
  whatsapp?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface UpdateContactDto extends DeepPartial<CreateContactDto> {}

export interface ContactPresenterDto extends CreateContactDto {
  id: string;
}

export const createContactRawExample: CreateContactDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  whatsapp: "5599999999999",
  email: "contato@exemplo.com",
  instagram: "@exemplo",
};

export const contactPresenterRawExample: ContactPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  ...createContactRawExample,
};
