import { DeepPartial } from "@/common/domain/types/DeepPartial";

export type DocumentTypeDto = "CPF" | "CNPJ" | "RG" | "OTHER";

export interface CreateResponsibleDto {
  establishmentId?: string;
  name?: string;
  birthDate?: string;
  documentType?: DocumentTypeDto;
  document?: string;
}

export interface UpdateResponsibleDto extends DeepPartial<CreateResponsibleDto> {}

export interface ResponsiblePresenterDto extends CreateResponsibleDto {
  id: string;
}

export const createResponsibleRawExample: CreateResponsibleDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  name: "Responsável Exemplo",
  birthDate: "1990-01-01",
  documentType: "CPF",
  document: "000.000.000-00",
};

export const responsiblePresenterRawExample: ResponsiblePresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  ...createResponsibleRawExample,
};
