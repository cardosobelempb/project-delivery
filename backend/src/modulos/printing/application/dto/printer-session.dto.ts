import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { YesNoStatusDto } from "@/common/shared/enums/yes-no-status.enum";

export interface CreatePrinterSessionDto {
  ide?: string;

  status: YesNoStatusDto;

  token?: string;
}

export interface UpdatePrinterSessionDto extends DeepPartial<CreatePrinterSessionDto> {}

export interface PrinterSessionPresenterDto {
  id: string;

  ide?: string;

  status: YesNoStatusDto;

  token?: string;
}

export const createPrinterSessionRawExample: CreatePrinterSessionDto = {
  ide: "example",
  status: YesNoStatusDto.YES,
  token: "secret-value",
};

export const printerSessionPresenterRawExample: PrinterSessionPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  ide: "example",
  status: YesNoStatusDto.YES,
  token: "secret-value",
};
