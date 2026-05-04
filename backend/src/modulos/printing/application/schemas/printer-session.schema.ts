import { ValidatorMessage } from "@/common/domain/validations";
import { YesNoStatusDto } from "@/common/shared/enums/yes-no-status.enum";
import { z } from "zod";

/**
 * Validações Zod para PrinterSession.
 *
 * Convenção:
 * - create: valida payload de entrada para criação.
 * - update: valida payload parcial para atualização.
 * - presenter: valida objeto de saída/retorno da API.
 */
export const createPrinterSessionSchema = z
  .object({
    ide: z.string().max(9).optional(),
    status: z.nativeEnum(YesNoStatusDto).optional(),
    token: z
      .string(ValidatorMessage.REQUIRED_FIELD)
      .min(2, ValidatorMessage.MIN_VALUE)
      .max(255, ValidatorMessage.MAX_VALUE)
      .optional(),
  })
  .strict();

export const updatePrinterSessionSchema = createPrinterSessionSchema
  .partial()
  .strict();

export const printerSessionPresenterSchema = z
  .object({
    id: z.string().uuid(),
    ide: z.string().max(9).nullable().optional(),
    status: z.nativeEnum(YesNoStatusDto).nullable().optional(),
    token: z.string().max(255).nullable().optional(),
  })
  .strict();

export type CreatePrinterSessionInput = z.infer<
  typeof createPrinterSessionSchema
>;
export type UpdatePrinterSessionInput = z.infer<
  typeof updatePrinterSessionSchema
>;
export type PrinterSessionPresenter = z.infer<
  typeof printerSessionPresenterSchema
>;

export const createPrinterSessionRawExample: CreatePrinterSessionInput = {
  ide: "valor_exemplo",
  status: YesNoStatusDto.YES,
  token: "valor_exemplo",
};

export const printerSessionPresenterRawExample: PrinterSessionPresenter = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  ide: "valor_exemplo",
  status: YesNoStatusDto.YES,
  token: "valor_exemplo",
};
