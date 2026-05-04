import { ValidatorMessage } from "@/common/domain/validations";
import { DeliveryFeeTypeDto } from "@/common/shared/enums/delivery-fee-type.enum";
import { DocumentTypeDto } from "@/common/shared/enums/document-type.enum";
import { EntityStatusDto } from "@/common/shared/enums/entity-status.enum";
import { YesNoStatusDto } from "@/common/shared/enums/yes-no-status.enum";
import { z } from "zod";

/**
 * Validações Zod para Establishment.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createEstablishmentSchema = z
  .object({
    userId: z.string().uuid().optional(),
    segmentId: z.string().uuid().optional(),
    licenseId: z.coerce.number().int().optional(),
    oneSignalId: z.string().uuid().max(150).optional(),
    affiliate: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    description: z.string().optional(),
    stateLegacy: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    cityLegacy: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    subdomain: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    profileImage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    coverImage: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    themeColor: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    minimumOrder: z.union([z.number(), z.string()]).optional(),
    acceptsMoney: z.nativeEnum(YesNoStatusDto).optional(),
    acceptsDebitCard: z.nativeEnum(YesNoStatusDto).optional(),
    debitCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsCreditCard: z.nativeEnum(YesNoStatusDto).optional(),
    creditCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsFoodCard: z.nativeEnum(YesNoStatusDto).optional(),
    foodCardBrands: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsOtherPayment: z.nativeEnum(YesNoStatusDto).optional(),
    otherPaymentDescription: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    acceptsPix: z.nativeEnum(YesNoStatusDto).optional(),
    zipCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    addressNumber: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    neighborhood: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    street: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    complement: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    reference: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    businessHoursText: z.string().optional(),
    allowPickup: z.nativeEnum(YesNoStatusDto).optional(),
    allowDelivery: z.nativeEnum(YesNoStatusDto).optional(),
    deliveryType: z.nativeEnum(DeliveryFeeTypeDto).optional(),
    deliveryValue: z.union([z.number(), z.string()]).optional(),
    whatsapp: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    contactEmail: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .email()
      .optional(),
    instagram: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    facebook: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    youtube: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    analyticsCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pixelCode: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    customHtml: z.string().optional(),
    responsibleName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    responsibleBirthDate: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    responsibleDocumentType: z.nativeEnum(DocumentTypeDto).optional(),
    responsibleDocument: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    email: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .email()
      .optional(),
    status: z.nativeEnum(EntityStatusDto).optional(),
    forcedStatus: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    operationStatus: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).optional(),
    expirationStatus: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    excluded: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    excludedAt: z.coerce.date().optional(),
    productLimit: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    displayMode: z.string().max(11).optional(),
    pixType: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pixKey: z.string().max(99).optional(),
    pixBeneficiary: z.string().max(25).optional(),
    deliveryName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    pickupName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    tableName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    deliveryEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    pickupEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    tableEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    otherEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    otherName: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    token: z.string().max(250).optional(),
    businessHoursJson: z.string().optional(),
    accessToken: z.string().max(250).optional(),
    calculateShipping: z.nativeEnum(YesNoStatusDto).optional(),
    shippingType: z.nativeEnum(DeliveryFeeTypeDto).optional(),
    shippingCompany: z.string().max(150).optional(),
    shippingPassword: z.string().max(50).optional(),
    establishmentPixData: z.string().optional(),
    mercadoPagoEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    mercadoPagoSandbox: z.coerce.boolean().optional(),
    mercadoPagoPublicKey: z.string().max(200).optional(),
    mercadoPagoSecretKey: z.string().max(200).optional(),
    pagSeguroEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    pagSeguroSandbox: z.coerce.boolean().optional(),
    pagSeguroEmail: z.string().max(200).email().optional(),
    pagSeguroToken: z.string().max(200).optional(),
    mercadoPagoPixEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    mercadoPagoPixToken: z.string().max(100).optional(),
    getnetEnabled: z.nativeEnum(YesNoStatusDto).optional(),
    getnetSandbox: z.coerce.boolean().optional(),
    getnetClientId: z.string().uuid().max(200).optional(),
    getnetClientSecret: z.string().max(200).optional(),
    getnetSellerId: z.string().uuid().max(200).optional(),
    validity: z.coerce.number().int().optional(),
    triggerCount: z.coerce.number().int().optional(),
    createdAt: z.coerce.date().optional(),
    lastLoginAt: z.coerce.date().optional(),
  })
  .strict();

export const updateEstablishmentSchema = createEstablishmentSchema
  .partial()
  .strict();

export const establishmentPresenterSchema = z
  .object({
    id: z.string().uuid(),
    userId: z.string().uuid().nullable().optional(),
    segmentId: z.string().uuid().nullable().optional(),
    licenseId: z.coerce.number().int().nullable().optional(),
    oneSignalId: z.string().uuid().max(150).nullable().optional(),
    affiliate: z.string().max(255).nullable().optional(),
    name: z.string().max(255).nullable().optional(),
    description: z.string().nullable().optional(),
    stateLegacy: z.string().max(255).nullable().optional(),
    cityLegacy: z.string().max(255).nullable().optional(),
    subdomain: z.string().max(255).nullable().optional(),
    profileImage: z.string().max(255).nullable().optional(),
    coverImage: z.string().max(255).nullable().optional(),
    themeColor: z.string().max(255).nullable().optional(),
    minimumOrder: z.union([z.number(), z.string()]).nullable().optional(),
    acceptsMoney: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    acceptsDebitCard: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    debitCardBrands: z.string().max(255).nullable().optional(),
    acceptsCreditCard: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    creditCardBrands: z.string().max(255).nullable().optional(),
    acceptsFoodCard: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    foodCardBrands: z.string().max(255).nullable().optional(),
    acceptsOtherPayment: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    otherPaymentDescription: z.string().max(255).nullable().optional(),
    acceptsPix: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    zipCode: z.string().max(255).nullable().optional(),
    addressNumber: z.string().max(255).nullable().optional(),
    neighborhood: z.string().max(255).nullable().optional(),
    street: z.string().max(255).nullable().optional(),
    complement: z.string().max(255).nullable().optional(),
    reference: z.string().max(255).nullable().optional(),
    businessHoursText: z.string().nullable().optional(),
    allowPickup: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    allowDelivery: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    deliveryType: z.nativeEnum(DeliveryFeeTypeDto).nullable().optional(),
    deliveryValue: z.union([z.number(), z.string()]).nullable().optional(),
    whatsapp: z.string().max(255).nullable().optional(),
    contactEmail: z.string().max(255).email().nullable().optional(),
    instagram: z.string().max(255).nullable().optional(),
    facebook: z.string().max(255).nullable().optional(),
    youtube: z.string().max(255).nullable().optional(),
    analyticsCode: z.string().max(255).nullable().optional(),
    pixelCode: z.string().max(255).nullable().optional(),
    customHtml: z.string().nullable().optional(),
    responsibleName: z.string().max(255).nullable().optional(),
    responsibleBirthDate: z.string().max(255).nullable().optional(),
    responsibleDocumentType: z
      .nativeEnum(DocumentTypeDto)
      .nullable()
      .optional(),
    responsibleDocument: z.string().max(255).nullable().optional(),
    email: z.string().max(255).email().nullable().optional(),
    status: z.nativeEnum(EntityStatusDto).nullable().optional(),
    forcedStatus: z.string().max(255).nullable().optional(),
    operationStatus: z.string().max(255).nullable().optional(),
    marketplaceFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    variationFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    bannerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    triggerFeature: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    expirationStatus: z.string().max(255).nullable().optional(),
    excluded: z.string().max(255).nullable().optional(),
    excludedAt: z.coerce.date().nullable().optional(),
    productLimit: z.string().max(255).nullable().optional(),
    displayMode: z.string().max(11).nullable().optional(),
    pixType: z.string().max(255).nullable().optional(),
    pixKey: z.string().max(99).nullable().optional(),
    pixBeneficiary: z.string().max(25).nullable().optional(),
    deliveryName: z.string().max(255).nullable().optional(),
    pickupName: z.string().max(255).nullable().optional(),
    tableName: z.string().max(255).nullable().optional(),
    deliveryEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    pickupEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    tableEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    otherEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    otherName: z.string().max(255).nullable().optional(),
    token: z.string().max(250).nullable().optional(),
    businessHoursJson: z.string().nullable().optional(),
    accessToken: z.string().max(250).nullable().optional(),
    calculateShipping: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    shippingType: z.nativeEnum(DeliveryFeeTypeDto).nullable().optional(),
    shippingCompany: z.string().max(150).nullable().optional(),
    shippingPassword: z.string().max(50).nullable().optional(),
    establishmentPixData: z.string().nullable().optional(),
    mercadoPagoEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    mercadoPagoSandbox: z.coerce.boolean().nullable().optional(),
    mercadoPagoPublicKey: z.string().max(200).nullable().optional(),
    mercadoPagoSecretKey: z.string().max(200).nullable().optional(),
    pagSeguroEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    pagSeguroSandbox: z.coerce.boolean().nullable().optional(),
    pagSeguroEmail: z.string().max(200).email().nullable().optional(),
    pagSeguroToken: z.string().max(200).nullable().optional(),
    mercadoPagoPixEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    mercadoPagoPixToken: z.string().max(100).nullable().optional(),
    getnetEnabled: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    getnetSandbox: z.coerce.boolean().nullable().optional(),
    getnetClientId: z.string().uuid().max(200).nullable().optional(),
    getnetClientSecret: z.string().max(200).nullable().optional(),
    getnetSellerId: z.string().uuid().max(200).nullable().optional(),
    validity: z.coerce.number().int().nullable().optional(),
    triggerCount: z.coerce.number().int().nullable().optional(),
    createdAt: z.coerce.date().nullable().optional(),
    updatedAt: z.coerce.date().nullable().optional(),
    lastLoginAt: z.coerce.date().nullable().optional(),
  })
  .strict();

export type CreateEstablishmentInput = z.infer<
  typeof createEstablishmentSchema
>;
export type UpdateEstablishmentInput = z.infer<
  typeof updateEstablishmentSchema
>;
export type EstablishmentPresenter = z.infer<
  typeof establishmentPresenterSchema
>;

export const createEstablishmentRawExample: CreateEstablishmentInput = {
  userId: "550e8400-e29b-41d4-a716-446655440000",
  segmentId: "550e8400-e29b-41d4-a716-446655440000",
  licenseId: 1,
  oneSignalId: "550e8400-e29b-41d4-a716-446655440000",
  affiliate: "valor_exemplo",
  name: "Exemplo",
  description: "valor_exemplo",
  stateLegacy: "valor_exemplo",
  cityLegacy: "valor_exemplo",
  subdomain: "valor_exemplo",
  profileImage: "valor_exemplo",
  coverImage: "valor_exemplo",
  themeColor: "valor_exemplo",
  minimumOrder: 99.9,
  acceptsMoney: YesNoStatusDto.YES,
  acceptsDebitCard: YesNoStatusDto.YES,
  debitCardBrands: "valor_exemplo",
  acceptsCreditCard: YesNoStatusDto.YES,
  creditCardBrands: "valor_exemplo",
  acceptsFoodCard: YesNoStatusDto.YES,
  foodCardBrands: "valor_exemplo",
  acceptsOtherPayment: YesNoStatusDto.YES,
  otherPaymentDescription: "valor_exemplo",
  acceptsPix: YesNoStatusDto.YES,
  zipCode: "60000000",
  addressNumber: "valor_exemplo",
  neighborhood: "valor_exemplo",
  street: "valor_exemplo",
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  businessHoursText: "valor_exemplo",
  allowPickup: YesNoStatusDto.YES,
  allowDelivery: YesNoStatusDto.YES,
  deliveryType: DeliveryFeeTypeDto.FIXED,
  deliveryValue: 99.9,
  whatsapp: "85999999999",
  contactEmail: "contato@exemplo.com",
  instagram: "valor_exemplo",
  facebook: "valor_exemplo",
  youtube: "valor_exemplo",
  analyticsCode: "CODE123",
  pixelCode: "CODE123",
  customHtml: "valor_exemplo",
  responsibleName: "Exemplo",
  responsibleBirthDate: "valor_exemplo",
  responsibleDocumentType: DocumentTypeDto.CPF,
  responsibleDocument: "valor_exemplo",
  email: "contato@exemplo.com",
  status: EntityStatusDto.ACTIVE,
  forcedStatus: "valor_exemplo",
  operationStatus: "valor_exemplo",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  expirationStatus: "valor_exemplo",
  excluded: "valor_exemplo",
  excludedAt: new Date("2026-04-28T12:00:00.000Z"),
  productLimit: "valor_exemplo",
  displayMode: "valor_exemplo",
  pixType: "valor_exemplo",
  pixKey: "valor_exemplo",
  pixBeneficiary: "valor_exemplo",
  deliveryName: "Exemplo",
  pickupName: "Exemplo",
  tableName: "Exemplo",
  deliveryEnabled: YesNoStatusDto.YES,
  pickupEnabled: YesNoStatusDto.YES,
  tableEnabled: YesNoStatusDto.YES,
  otherEnabled: YesNoStatusDto.YES,
  otherName: "Exemplo",
  token: "valor_exemplo",
  businessHoursJson: "valor_exemplo",
  accessToken: "valor_exemplo",
  calculateShipping: YesNoStatusDto.YES,
  shippingType: DeliveryFeeTypeDto.FIXED,
  shippingCompany: "valor_exemplo",
  shippingPassword: "senha_hash_exemplo",
  establishmentPixData: "valor_exemplo",
  mercadoPagoEnabled: YesNoStatusDto.YES,
  mercadoPagoSandbox: true,
  mercadoPagoPublicKey: "valor_exemplo",
  mercadoPagoSecretKey: "valor_exemplo",
  pagSeguroEnabled: YesNoStatusDto.YES,
  pagSeguroSandbox: true,
  pagSeguroEmail: "contato@exemplo.com",
  pagSeguroToken: "valor_exemplo",
  mercadoPagoPixEnabled: YesNoStatusDto.YES,
  mercadoPagoPixToken: "valor_exemplo",
  getnetEnabled: YesNoStatusDto.YES,
  getnetSandbox: true,
  getnetClientId: "550e8400-e29b-41d4-a716-446655440000",
  getnetClientSecret: "valor_exemplo",
  getnetSellerId: "550e8400-e29b-41d4-a716-446655440000",
  validity: 1,
  triggerCount: 1,
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  lastLoginAt: new Date("2026-04-28T12:00:00.000Z"),
};

export const establishmentPresenterRawExample: EstablishmentPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  userId: "550e8400-e29b-41d4-a716-446655440000",
  segmentId: "550e8400-e29b-41d4-a716-446655440000",
  licenseId: 1,
  oneSignalId: "550e8400-e29b-41d4-a716-446655440000",
  affiliate: "valor_exemplo",
  name: "Exemplo",
  description: "valor_exemplo",
  stateLegacy: "valor_exemplo",
  cityLegacy: "valor_exemplo",
  subdomain: "valor_exemplo",
  profileImage: "valor_exemplo",
  coverImage: "valor_exemplo",
  themeColor: "valor_exemplo",
  minimumOrder: 99.9,
  acceptsMoney: YesNoStatusDto.YES,
  acceptsDebitCard: YesNoStatusDto.YES,
  debitCardBrands: "valor_exemplo",
  acceptsCreditCard: YesNoStatusDto.YES,
  creditCardBrands: "valor_exemplo",
  acceptsFoodCard: YesNoStatusDto.YES,
  foodCardBrands: "valor_exemplo",
  acceptsOtherPayment: YesNoStatusDto.YES,
  otherPaymentDescription: "valor_exemplo",
  acceptsPix: YesNoStatusDto.YES,
  zipCode: "60000000",
  addressNumber: "valor_exemplo",
  neighborhood: "valor_exemplo",
  street: "valor_exemplo",
  complement: "valor_exemplo",
  reference: "valor_exemplo",
  businessHoursText: "valor_exemplo",
  allowPickup: YesNoStatusDto.YES,
  allowDelivery: YesNoStatusDto.YES,
  deliveryType: DeliveryFeeTypeDto.FIXED,
  deliveryValue: 99.9,
  whatsapp: "85999999999",
  contactEmail: "contato@exemplo.com",
  instagram: "valor_exemplo",
  facebook: "valor_exemplo",
  youtube: "valor_exemplo",
  analyticsCode: "CODE123",
  pixelCode: "CODE123",
  customHtml: "valor_exemplo",
  responsibleName: "Exemplo",
  responsibleBirthDate: "valor_exemplo",
  responsibleDocumentType: DocumentTypeDto.CPF,
  responsibleDocument: "valor_exemplo",
  email: "contato@exemplo.com",
  status: EntityStatusDto.ACTIVE,
  forcedStatus: "valor_exemplo",
  operationStatus: "valor_exemplo",
  marketplaceFeature: YesNoStatusDto.YES,
  variationFeature: YesNoStatusDto.YES,
  bannerFeature: YesNoStatusDto.YES,
  triggerFeature: YesNoStatusDto.YES,
  expirationStatus: "valor_exemplo",
  excluded: "valor_exemplo",
  excludedAt: new Date("2026-04-28T12:00:00.000Z"),
  productLimit: "valor_exemplo",
  displayMode: "valor_exemplo",
  pixType: "valor_exemplo",
  pixKey: "valor_exemplo",
  pixBeneficiary: "valor_exemplo",
  deliveryName: "Exemplo",
  pickupName: "Exemplo",
  tableName: "Exemplo",
  deliveryEnabled: YesNoStatusDto.YES,
  pickupEnabled: YesNoStatusDto.YES,
  tableEnabled: YesNoStatusDto.YES,
  otherEnabled: YesNoStatusDto.YES,
  otherName: "Exemplo",
  token: "valor_exemplo",
  businessHoursJson: "valor_exemplo",
  accessToken: "valor_exemplo",
  calculateShipping: YesNoStatusDto.YES,
  shippingType: DeliveryFeeTypeDto.FIXED,
  shippingCompany: "valor_exemplo",
  shippingPassword: "senha_hash_exemplo",
  establishmentPixData: "valor_exemplo",
  mercadoPagoEnabled: YesNoStatusDto.YES,
  mercadoPagoSandbox: true,
  mercadoPagoPublicKey: "valor_exemplo",
  mercadoPagoSecretKey: "valor_exemplo",
  pagSeguroEnabled: YesNoStatusDto.YES,
  pagSeguroSandbox: true,
  pagSeguroEmail: "contato@exemplo.com",
  pagSeguroToken: "valor_exemplo",
  mercadoPagoPixEnabled: YesNoStatusDto.YES,
  mercadoPagoPixToken: "valor_exemplo",
  getnetEnabled: YesNoStatusDto.YES,
  getnetSandbox: true,
  getnetClientId: "550e8400-e29b-41d4-a716-446655440000",
  getnetClientSecret: "valor_exemplo",
  getnetSellerId: "550e8400-e29b-41d4-a716-446655440000",
  validity: 1,
  triggerCount: 1,
  createdAt: new Date("2026-04-28T12:00:00.000Z"),
  updatedAt: new Date("2026-04-28T12:00:00.000Z"),
  lastLoginAt: new Date("2026-04-28T12:00:00.000Z"),
};
