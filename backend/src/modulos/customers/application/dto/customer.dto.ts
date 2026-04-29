import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { YesNoStatusDto } from "@/shared/dto/yes-no-status.dto";

export interface CreateCustomerDto {
  establishmentId?: string;

  cityId?: string;

  greetingCount: number;

  lastMessage?: string;

  name?: string;

  timestamp?: string;

  triggerStatus: YesNoStatusDto;

  includedAt?: Date | string;

  whatsapp?: string;

  password?: string;

  pointsQuantity: number;

  pointsOperations?: string;

  ordersQuantity: number;

  active?: boolean;

  zipCode?: string;

  street?: string;

  number?: string;

  neighborhood?: string;

  stateLegacyId?: number;

  complement?: string;

  reference?: string;

  p256dh?: string;

  auth?: string;

  endpoint?: string;
}

export interface UpdateCustomerDto extends DeepPartial<CreateCustomerDto> {}

export interface CustomerPresenterDto {
  id: string;

  establishmentId?: string;

  cityId?: string;

  greetingCount: number;

  lastMessage?: string;

  name?: string;

  timestamp?: string;

  triggerStatus: YesNoStatusDto;

  includedAt?: Date | string;

  whatsapp?: string;

  password?: string;

  pointsQuantity: number;

  pointsOperations?: string;

  ordersQuantity: number;

  active?: boolean;

  zipCode?: string;

  street?: string;

  number?: string;

  neighborhood?: string;

  stateLegacyId?: number;

  complement?: string;

  reference?: string;

  p256dh?: string;

  auth?: string;

  endpoint?: string;
}

export const createCustomerRawExample: CreateCustomerDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  cityId: "00000000-0000-4000-8000-000000000000",
  greetingCount: 1,
  lastMessage: "example",
  name: "Exemplo",
  timestamp: "example",
  triggerStatus: YesNoStatusDto.YES,
  includedAt: "2026-04-28T12:00:00.000Z",
  whatsapp: "85999999999",
  password: "secret-value",
  pointsQuantity: 10.5,
  pointsOperations: "example",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "example",
  number: "example",
  neighborhood: "example",
  stateLegacyId: 1,
  complement: "example",
  reference: "example",
  p256dh: "example",
  auth: "example",
  endpoint: "example",
};

export const customerPresenterRawExample: CustomerPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  cityId: "00000000-0000-4000-8000-000000000000",
  greetingCount: 1,
  lastMessage: "example",
  name: "Exemplo",
  timestamp: "example",
  triggerStatus: YesNoStatusDto.YES,
  includedAt: "2026-04-28T12:00:00.000Z",
  whatsapp: "85999999999",
  password: "secret-value",
  pointsQuantity: 10.5,
  pointsOperations: "example",
  ordersQuantity: 1,
  active: true,
  zipCode: "60000000",
  street: "example",
  number: "example",
  neighborhood: "example",
  stateLegacyId: 1,
  complement: "example",
  reference: "example",
  p256dh: "example",
  auth: "example",
  endpoint: "example",
};
