import { DeepPartial } from "@/common/domain/types/DeepPartial";
import { EntityStatusDto } from "@/shared/enums/entity-status.enum";
import { VisibilityStatusDto } from "@/shared/enums/visibility-status.enum";
import { YesNoStatusDto } from "@/shared/enums/yes-no-status.enum";

export interface CreateProductDto {
  establishmentId?: string;

  categoryId?: string;

  featured?: YesNoStatusDto;

  reference?: string;

  pdvCode?: number;

  points: number;

  allowExchange: boolean;

  itemPoints: number;

  name?: string;

  videoLink?: string;

  description?: string;

  price?: number | string;

  offer?: YesNoStatusDto;

  promotionalPrice?: number | string;

  variationJson?: string;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  orderStatus?: string;

  integrated?: string;

  shippingWeight?: number;

  shippingHeight?: number;

  shippingWidth?: number;

  shippingLength?: number;

  shippingDiameter?: number;

  stockEnabled: YesNoStatusDto;

  position?: string;
}

export interface UpdateProductDto extends DeepPartial<CreateProductDto> {}

export interface ProductPresenterDto {
  id: string;

  establishmentId?: string;

  categoryId?: string;

  featured?: YesNoStatusDto;

  reference?: string;

  pdvCode?: number;

  points: number;

  allowExchange: boolean;

  itemPoints: number;

  name?: string;

  videoLink?: string;

  description?: string;

  price?: number | string;

  offer?: YesNoStatusDto;

  promotionalPrice?: number | string;

  variationJson?: string;

  visible?: VisibilityStatusDto;

  status: EntityStatusDto;

  orderStatus?: string;

  integrated?: string;

  shippingWeight?: number;

  shippingHeight?: number;

  shippingWidth?: number;

  shippingLength?: number;

  shippingDiameter?: number;

  stockEnabled: YesNoStatusDto;

  position?: string;

  createdAt?: Date | string;

  updatedAt?: Date | string;
}

export const createProductRawExample: CreateProductDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  categoryId: "00000000-0000-4000-8000-000000000000",
  featured: YesNoStatusDto.YES,
  reference: "example",
  pdvCode: 1,
  points: 10.5,
  allowExchange: true,
  itemPoints: 1,
  name: "Exemplo",
  videoLink: "https://example.com/file.png",
  description: "example",
  price: 10.5,
  offer: YesNoStatusDto.YES,
  promotionalPrice: 10.5,
  variationJson: "example",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  orderStatus: "example",
  integrated: "example",
  shippingWeight: 10.5,
  shippingHeight: 10.5,
  shippingWidth: 10.5,
  shippingLength: 10.5,
  shippingDiameter: 10.5,
  stockEnabled: YesNoStatusDto.YES,
  position: "example",
};

export const productPresenterRawExample: ProductPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  categoryId: "00000000-0000-4000-8000-000000000000",
  featured: YesNoStatusDto.YES,
  reference: "example",
  pdvCode: 1,
  points: 10.5,
  allowExchange: true,
  itemPoints: 1,
  name: "Exemplo",
  videoLink: "https://example.com/file.png",
  description: "example",
  price: 10.5,
  offer: YesNoStatusDto.YES,
  promotionalPrice: 10.5,
  variationJson: "example",
  visible: VisibilityStatusDto.VISIBLE,
  status: EntityStatusDto.ACTIVE,
  orderStatus: "example",
  integrated: "example",
  shippingWeight: 10.5,
  shippingHeight: 10.5,
  shippingWidth: 10.5,
  shippingLength: 10.5,
  shippingDiameter: 10.5,
  stockEnabled: YesNoStatusDto.YES,
  position: "example",
  createdAt: "2026-04-28T12:00:00.000Z",
  updatedAt: "2026-04-28T12:00:00.000Z",
};
