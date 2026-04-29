import { DeepPartial } from "@/common/domain/types/DeepPartial";

import { VoucherStatusDto } from "@/shared/dto/voucher-status.dto";

export interface CreateVoucherDto {
  planId?: string;

  subscriptionId?: string;

  description?: string;

  code?: string;

  status: VoucherStatusDto;

  affiliate?: string;
}

export interface UpdateVoucherDto extends DeepPartial<CreateVoucherDto> {}

export interface VoucherPresenterDto {
  id: string;

  planId?: string;

  subscriptionId?: string;

  description?: string;

  code?: string;

  status: VoucherStatusDto;

  affiliate?: string;
}

export const createVoucherRawExample: CreateVoucherDto = {
  planId: "00000000-0000-4000-8000-000000000000",
  subscriptionId: "00000000-0000-4000-8000-000000000000",
  description: "example",
  code: "CODE123",
  status: VoucherStatusDto.UNUSED,
  affiliate: "example",
};

export const voucherPresenterRawExample: VoucherPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  planId: "00000000-0000-4000-8000-000000000000",
  subscriptionId: "00000000-0000-4000-8000-000000000000",
  description: "example",
  code: "CODE123",
  status: VoucherStatusDto.UNUSED,
  affiliate: "example",
};
