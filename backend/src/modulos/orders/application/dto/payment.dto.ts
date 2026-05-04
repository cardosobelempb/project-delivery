import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { PaymentGatewayDto } from "@/common/shared/enums/payment-gateway.enum";
import { PaymentStatusDto } from "@/common/shared/enums/payment-status.enum";

export interface CreatePaymentDto {
  establishmentId: string;

  orderId: string;

  date: string;

  time: string;

  value: string;

  gateway: PaymentGatewayDto;

  code: string;

  status: PaymentStatusDto;
}

export interface UpdatePaymentDto extends DeepPartial<CreatePaymentDto> {}

export interface PaymentPresenterDto {
  id: string;

  establishmentId: string;

  orderId: string;

  date: string;

  time: string;

  value: string;

  gateway: PaymentGatewayDto;

  code: string;

  status: PaymentStatusDto;
}

export const createPaymentRawExample: CreatePaymentDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  orderId: "00000000-0000-4000-8000-000000000000",
  date: "example",
  time: "example",
  value: "example",
  gateway: PaymentGatewayDto.MERCADO_PAGO,
  code: "CODE123",
  status: PaymentStatusDto.PENDING,
};

export const paymentPresenterRawExample: PaymentPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  orderId: "00000000-0000-4000-8000-000000000000",
  date: "example",
  time: "example",
  value: "example",
  gateway: PaymentGatewayDto.MERCADO_PAGO,
  code: "CODE123",
  status: PaymentStatusDto.PENDING,
};
