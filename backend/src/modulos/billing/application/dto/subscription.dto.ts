import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { SubscriptionModeDto } from "@/shared/dto/subscription-mode.dto";
import { SubscriptionStatusDto } from "@/shared/dto/subscription-status.dto";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";

export interface CreateSubscriptionDto {
  planId?: string;

  establishmentId?: string;

  establishmentName?: string;

  establishmentSubdomain?: string;

  affiliate?: string;

  name?: string;

  description?: string;

  commission?: string;

  durationMonths?: string;

  durationDays?: string;

  totalValue?: number | string;

  receivedValue?: number | string;

  monthlyValue?: number | string;

  terms?: string;

  triggerFeature: YesNoStatusDto;

  marketplaceFeature?: YesNoStatusDto;

  variationFeature?: YesNoStatusDto;

  bannerFeature?: YesNoStatusDto;

  gatewayReference?: string;

  gatewayLink?: string;

  gatewayTransaction?: string;

  gatewayPayableAt?: Date | string;

  gatewayExpirationAt?: Date | string;

  gatewayPayment?: string;

  mode?: SubscriptionModeDto;

  voucherCode?: string;

  status: SubscriptionStatusDto;

  used?: boolean;

  expiresAt?: Date | string;

  excluded?: string;

  productLimit?: string;
}

export interface UpdateSubscriptionDto extends DeepPartial<CreateSubscriptionDto> {}

export interface SubscriptionPresenterDto {
  id: string;

  planId?: string;

  establishmentId?: string;

  establishmentName?: string;

  establishmentSubdomain?: string;

  affiliate?: string;

  name?: string;

  description?: string;

  commission?: string;

  durationMonths?: string;

  durationDays?: string;

  totalValue?: number | string;

  receivedValue?: number | string;

  monthlyValue?: number | string;

  terms?: string;

  triggerFeature: YesNoStatusDto;

  marketplaceFeature?: YesNoStatusDto;

  variationFeature?: YesNoStatusDto;

  bannerFeature?: YesNoStatusDto;

  gatewayReference?: string;

  gatewayLink?: string;

  gatewayTransaction?: string;

  gatewayPayableAt?: Date | string;

  gatewayExpirationAt?: Date | string;

  gatewayPayment?: string;

  mode?: SubscriptionModeDto;

  voucherCode?: string;

  status: SubscriptionStatusDto;

  used?: boolean;

  expiresAt?: Date | string;

  createdAt?: Date | string;

  excluded?: string;

  productLimit?: string;
}

export const createSubscriptionRawExample: CreateSubscriptionDto = {
  planId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  establishmentName: "Exemplo",
  establishmentSubdomain: "example",
  affiliate: "example",
  name: "Exemplo",
  description: "example",
  commission: "example",
  durationMonths: "example",
  durationDays: "example",
  totalValue: 10.5,
  receivedValue: 10.5,
  monthlyValue: 10.5,
  terms: "example",
  triggerFeature: YesNoStatusDto.YES,
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  gatewayReference: "example",
  gatewayLink: "https://example.com/file.png",
  gatewayTransaction: "example",
  gatewayPayableAt: "2026-04-28T12:00:00.000Z",
  gatewayExpirationAt: "2026-04-28T12:00:00.000Z",
  gatewayPayment: "example",
  mode: SubscriptionModeDto.TRIAL,
  voucherCode: "CODE123",
  status: SubscriptionStatusDto.PENDING,
  used: true,
  excluded: "example",
  productLimit: "example",
};

export const subscriptionPresenterRawExample: SubscriptionPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  planId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  establishmentName: "Exemplo",
  establishmentSubdomain: "example",
  affiliate: "example",
  name: "Exemplo",
  description: "example",
  commission: "example",
  durationMonths: "example",
  durationDays: "example",
  totalValue: 10.5,
  receivedValue: 10.5,
  monthlyValue: 10.5,
  terms: "example",
  triggerFeature: YesNoStatusDto.YES,
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  gatewayReference: "example",
  gatewayLink: "https://example.com/file.png",
  gatewayTransaction: "example",
  gatewayPayableAt: "2026-04-28T12:00:00.000Z",
  gatewayExpirationAt: "2026-04-28T12:00:00.000Z",
  gatewayPayment: "example",
  mode: SubscriptionModeDto.TRIAL,
  voucherCode: "CODE123",
  status: SubscriptionStatusDto.ACTIVE,
  used: true,
  expiresAt: "2026-04-28T12:00:00.000Z",
  createdAt: "2026-04-28T12:00:00.000Z",
  excluded: "example",
  productLimit: "example",
};
