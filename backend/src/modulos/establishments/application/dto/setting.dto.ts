import { DeepPartial } from "@/common/domain/types/DeepPartial";

export type YesNoStatusDto = "YES" | "NO";
export type DeliveryFeeTypeDto = "FIXED" | "BY_DISTANCE" | "BY_CEP" | "MANUAL";

export interface CreateSettingDto {
  establishmentId?: string;
  minimumOrder?: number;
  acceptsMoney?: YesNoStatusDto;
  acceptsDebitCard?: YesNoStatusDto;
  debitCardBrands?: string;
  acceptsCreditCard?: YesNoStatusDto;
  creditCardBrands?: string;
  acceptsFoodCard?: YesNoStatusDto;
  foodCardBrands?: string;
  acceptsOtherPayment?: YesNoStatusDto;
  otherPaymentDescription?: string;
  acceptsPix?: YesNoStatusDto;
  pixType?: string;
  pixKey?: string;
  pixBeneficiary?: string;
  establishmentPixData?: string;
  businessHoursText?: string;
  businessHoursJson?: string;
  allowPickup?: YesNoStatusDto;
  allowDelivery?: YesNoStatusDto;
  deliveryType?: DeliveryFeeTypeDto;
  deliveryValue?: number;
  productLimit?: string;
  displayMode?: string;
  deliveryName?: string;
  pickupName?: string;
  tableName?: string;
  deliveryEnabled?: YesNoStatusDto;
  pickupEnabled?: YesNoStatusDto;
  tableEnabled?: YesNoStatusDto;
  otherEnabled?: YesNoStatusDto;
  otherName?: string;
  calculateShipping?: YesNoStatusDto;
  shippingType?: DeliveryFeeTypeDto;
  shippingCompany?: string;
  shippingPassword?: string;
  validity?: number;
  triggerCount?: number;
}

export interface UpdateSettingDto extends DeepPartial<CreateSettingDto> {}

export interface SettingPresenterDto extends CreateSettingDto {
  id: string;
}

export const createSettingRawExample: CreateSettingDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  minimumOrder: 20,
  acceptsPix: "YES",
  deliveryEnabled: "YES",
  pickupEnabled: "YES",
  tableEnabled: "NO",
  calculateShipping: "NO",
  validity: 0,
  triggerCount: 0,
};

export const settingPresenterRawExample: SettingPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  ...createSettingRawExample,
};
