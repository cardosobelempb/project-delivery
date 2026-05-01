import { ValidatorMessage } from "@/common/domain/validations";
import { DomainTypeDto } from "@/shared/enums/domain-type.enum";
import { z } from "zod";

/**
 * Validações Zod para Subdomain.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createSubdomainSchema = z
  .object({
    relatedId: z.string().uuid().optional(),
    type: z.nativeEnum(DomainTypeDto).optional(),
    subdomain: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    url: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updateSubdomainSchema = createSubdomainSchema.partial().strict();

export const subdomainPresenterSchema = z
  .object({
    id: z.string().uuid(),
    relatedId: z.string().uuid().nullable().optional(),
    type: z.nativeEnum(DomainTypeDto).nullable().optional(),
    subdomain: z.string().max(255).nullable().optional(),
    url: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreateSubdomainInput = z.infer<typeof createSubdomainSchema>;
export type UpdateSubdomainInput = z.infer<typeof updateSubdomainSchema>;
export type SubdomainPresenter = z.infer<typeof subdomainPresenterSchema>;

export const createSubdomainRawExample: CreateSubdomainInput = {
  relatedId: "550e8400-e29b-41d4-a716-446655440000",
  type: DomainTypeDto.STORE,
  subdomain: "valor_exemplo",
  url: "https://exemplo.com",
};

export const subdomainPresenterRawExample: SubdomainPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  relatedId: "550e8400-e29b-41d4-a716-446655440000",
  type: DomainTypeDto.STORE,
  subdomain: "valor_exemplo",
  url: "https://exemplo.com",
};
