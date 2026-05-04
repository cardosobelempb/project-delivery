import { ValidatorMessage } from "@/common/domain/validations";
import { ScheduleActionDto } from "@/common/shared/enums/schedule-action.enum";
import { z } from "zod";

/**
 * Validações Zod para Schedule.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createScheduleSchema = z
  .object({
    establishmentId: z.string().uuid().optional(),
    sunday: z.coerce.boolean().optional(),
    monday: z.coerce.boolean().optional(),
    tuesday: z.coerce.boolean().optional(),
    wednesday: z.coerce.boolean().optional(),
    thursday: z.coerce.boolean().optional(),
    friday: z.coerce.boolean().optional(),
    saturday: z.coerce.boolean().optional(),
    time: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
    action: z.nativeEnum(ScheduleActionDto).optional(),
  })
  .strict();

export const updateScheduleSchema = createScheduleSchema.partial().strict();

export const schedulePresenterSchema = z
  .object({
    id: z.string().uuid(),
    establishmentId: z.string().uuid().nullable().optional(),
    sunday: z.coerce.boolean().nullable().optional(),
    monday: z.coerce.boolean().nullable().optional(),
    tuesday: z.coerce.boolean().nullable().optional(),
    wednesday: z.coerce.boolean().nullable().optional(),
    thursday: z.coerce.boolean().nullable().optional(),
    friday: z.coerce.boolean().nullable().optional(),
    saturday: z.coerce.boolean().nullable().optional(),
    time: z.string().max(255).nullable().optional(),
    action: z.nativeEnum(ScheduleActionDto).nullable().optional(),
  })
  .strict();

export type CreateScheduleInput = z.infer<typeof createScheduleSchema>;
export type UpdateScheduleInput = z.infer<typeof updateScheduleSchema>;
export type SchedulePresenter = z.infer<typeof schedulePresenterSchema>;

export const createScheduleRawExample: CreateScheduleInput = {
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  time: "valor_exemplo",
  action: ScheduleActionDto.OPEN,
};

export const schedulePresenterRawExample: SchedulePresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  establishmentId: "550e8400-e29b-41d4-a716-446655440000",
  sunday: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  time: "valor_exemplo",
  action: ScheduleActionDto.OPEN,
};
