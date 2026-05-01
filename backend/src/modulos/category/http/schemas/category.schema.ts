import { ValidatorMessage } from "@/common/domain/validations";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { VisibilityStatus } from "@/shared/enums/visibility-status.enum";
import { z } from "zod";

/**
 * Validações Zod para Category.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createCategorySchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    order: z.coerce.number().int(),
    name: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    visible: z.nativeEnum(VisibilityStatus).optional(),
    status: z.nativeEnum(EntityStatus).optional(),
    sunday: z.coerce.boolean().optional(),
    monday: z.coerce.boolean().optional(),
    tuesday: z.coerce.boolean().optional(),
    wednesday: z.coerce.boolean().optional(),
    thursday: z.coerce.boolean().optional(),
    friday: z.coerce.boolean().optional(),
    saturday: z.coerce.boolean().optional(),
    holidays: z.coerce.boolean().optional(),
  })
  .strict();

export const updateCategorySchema = createCategorySchema.partial().strict();

export const categoryPresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    order: z.coerce.number().int(),
    name: z.string().max(255).nullable().optional(),
    visible: z.nativeEnum(VisibilityStatus).nullable().optional(),
    status: z.nativeEnum(EntityStatus).nullable().optional(),
    updatedAt: z.coerce.date().nullable().optional(),
    sunday: z.coerce.boolean().nullable().optional(),
    monday: z.coerce.boolean().nullable().optional(),
    tuesday: z.coerce.boolean().nullable().optional(),
    wednesday: z.coerce.boolean().nullable().optional(),
    thursday: z.coerce.boolean().nullable().optional(),
    friday: z.coerce.boolean().nullable().optional(),
    saturday: z.coerce.boolean().nullable().optional(),
    holidays: z.coerce.boolean().nullable().optional(),
  })
  .strict();

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
export type CategoryPresenter = z.infer<typeof categoryPresenterSchema>;

export const createCategoryRawExample: CreateCategoryInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  order: 1,
  name: "Exemplo",
  visible: VisibilityStatus.VISIBLE,
  status: EntityStatus.ACTIVE,
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  holidays: true,
};

export const categoryPresenterRawExample: CategoryPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  order: 1,
  name: "Exemplo",
  visible: VisibilityStatus.VISIBLE,
  status: EntityStatus.ACTIVE,
  updatedAt: new Date("2026-04-28T12:00:00.000Z"),
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  holidays: true,
};

export const CategoryPageQuerySchema = z.object({
  page: z.coerce.number().int().min(0).default(0),
  size: z.coerce.number().int().min(1).max(100).default(20),
  sort: z.string().optional().default("createdAt,desc"),
  filter: z.string().optional(),
});

export const CategoryResponseSchema = z.object({
  id: z.string(),
  establishmentId: z.string().nullable(),
  patentId: z.string().nullable(),
  order: z.coerce.number().int(),
  name: z.string(),
  slug: z.string(),
  visible: z.enum(VisibilityStatus),
  status: z.enum(EntityStatus),
  parentId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export const SortSchema = z.object({
  sorted: z.boolean(),
  unsorted: z.boolean(),
  empty: z.boolean(),
});

export const CategoryPageResponseSchema = z.object({
  content: z.array(CategoryResponseSchema),

  pageable: z.object({
    sort: SortSchema,
    offset: z.number(),
    pageSize: z.number(),
    pageNumber: z.number(),
    paged: z.boolean(),
    unpaged: z.boolean(),
  }),

  sort: SortSchema,
  totalElements: z.number(),
  totalPages: z.number(),
  numberOfElements: z.number(),
  size: z.number(),
  number: z.number(),
  first: z.boolean(),
  last: z.boolean(),
  empty: z.boolean(),
});
