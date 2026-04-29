import { DeepPartial } from "@/common/domain/types/DeepPartial";
export interface CreateCouponDto {
  establishmentId?: string;

  name?: string;

  description?: string;

  code?: string;

  type?: string;

  discountPercentage?: string;

  fixedDiscount?: number | string;

  maxValue?: number | string;

  quantity?: string;

  validUntil?: Date | string;
}

export interface UpdateCouponDto extends DeepPartial<CreateCouponDto> {}

export interface CouponPresenterDto {
  id: string;

  establishmentId?: string;

  name?: string;

  description?: string;

  code?: string;

  type?: string;

  discountPercentage?: string;

  fixedDiscount?: number | string;

  maxValue?: number | string;

  quantity?: string;

  validUntil?: Date | string;
}

export const createCouponRawExample: CreateCouponDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  description: "example",
  code: "CODE123",
  type: "example",
  discountPercentage: "example",
  fixedDiscount: 10.5,
  maxValue: 10.5,
  quantity: "example",
  validUntil: "2026-04-28T12:00:00.000Z",
};

export const couponPresenterRawExample: CouponPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  name: "Exemplo",
  description: "example",
  code: "CODE123",
  type: "example",
  discountPercentage: "example",
  fixedDiscount: 10.5,
  maxValue: 10.5,
  quantity: "example",
  validUntil: "2026-04-28T12:00:00.000Z",
};
