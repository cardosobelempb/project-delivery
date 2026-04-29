import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { DeliveryMethodDto } from "@/shared/dto/delivery-method.dto";
import { OrderStatusDto } from "@/shared/dto/order-status.dto";
import { PaymentMethodDto } from "@/shared/dto/payment-method.dto";
import { PaymentStatusDto } from "@/shared/dto/payment-status.dto";

export interface CreateOrderDto {
  licenseId?: number;

  segmentId?: string;

  establishmentId?: string;

  customerName?: string;

  whatsapp?: string;

  deliveryMethod?: DeliveryMethodDto;

  stateLegacy?: string;

  cityLegacy?: string;

  zipCode?: string;

  addressNumber?: string;

  neighborhood?: string;

  street?: string;

  complement?: string;

  reference?: string;

  paymentMethod?: PaymentMethodDto;

  paymentInfo?: string;

  receipt?: string;

  payloadJson?: string;

  status: OrderStatusDto;

  orderedAt?: Date | string;

  coupon?: string;

  orderValue?: number | string;

  fee?: number;

  tableNumber?: number;

  publicStatus: string;

  integrated?: number;

  message?: string;

  paymentLink?: string;

  paymentReference?: string;

  paidAt?: Date | string;

  paymentStatus?: PaymentStatusDto;

  paymentType?: string;

  paymentDetails?: string;
}

export interface UpdateOrderDto extends DeepPartial<CreateOrderDto> {}

export interface OrderPresenterDto {
  id: string;

  licenseId?: number;

  segmentId?: string;

  establishmentId?: string;

  customerName?: string;

  whatsapp?: string;

  deliveryMethod?: DeliveryMethodDto;

  stateLegacy?: string;

  cityLegacy?: string;

  zipCode?: string;

  addressNumber?: string;

  neighborhood?: string;

  street?: string;

  complement?: string;

  reference?: string;

  paymentMethod?: PaymentMethodDto;

  paymentInfo?: string;

  receipt?: string;

  payloadJson?: string;

  status: OrderStatusDto;

  orderedAt?: Date | string;

  coupon?: string;

  orderValue?: number | string;

  fee?: number;

  tableNumber?: number;

  publicStatus: string;

  integrated?: number;

  message?: string;

  paymentLink?: string;

  paymentReference?: string;

  paidAt?: Date | string;

  paymentStatus?: PaymentStatusDto;

  paymentType?: string;

  paymentDetails?: string;
}

export const createOrderRawExample: CreateOrderDto = {
  licenseId: 1,
  segmentId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  customerName: "Exemplo",
  whatsapp: "85999999999",
  deliveryMethod: DeliveryMethodDto.DELIVERY,
  stateLegacy: "example",
  cityLegacy: "example",
  zipCode: "60000000",
  addressNumber: "example",
  neighborhood: "example",
  street: "example",
  complement: "example",
  reference: "example",
  paymentMethod: PaymentMethodDto.MONEY,
  paymentInfo: "example",
  receipt: "example",
  payloadJson: "example",
  status: OrderStatusDto.PENDING,
  orderedAt: "2026-04-28T12:00:00.000Z",
  coupon: "example",
  orderValue: 10.5,
  fee: 10.5,
  tableNumber: 1,
  publicStatus: "example",
  integrated: 1,
  message: "example",
  paymentLink: "https://example.com/file.png",
  paymentReference: "example",
  paymentStatus: PaymentStatusDto.PENDING,
  paymentType: "example",
  paymentDetails: "example",
};

export const orderPresenterRawExample: OrderPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  licenseId: 1,
  segmentId: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  customerName: "Exemplo",
  whatsapp: "85999999999",
  deliveryMethod: DeliveryMethodDto.DELIVERY,
  stateLegacy: "example",
  cityLegacy: "example",
  zipCode: "60000000",
  addressNumber: "example",
  neighborhood: "example",
  street: "example",
  complement: "example",
  reference: "example",
  paymentMethod: PaymentMethodDto.MONEY,
  paymentInfo: "example",
  receipt: "example",
  payloadJson: "example",
  status: OrderStatusDto.PENDING,
  orderedAt: "2026-04-28T12:00:00.000Z",
  coupon: "example",
  orderValue: 10.5,
  fee: 10.5,
  tableNumber: 1,
  publicStatus: "example",
  integrated: 1,
  message: "example",
  paymentLink: "https://example.com/file.png",
  paymentReference: "example",
  paidAt: "2026-04-28T12:00:00.000Z",
  paymentStatus: PaymentStatusDto.PENDING,
  paymentType: "example",
  paymentDetails: "example",
};
