// ============================================================
// category.mapper.ts
// Responsabilidade: converter CategoryEntity → DTOs de resposta
//
// Métodos públicos:
//   toCreatedResponse  → CategoryResponseDto  (pós-criação)
//   toUpdatedResponse  → CategoryResponseDto  (pós-atualização)
//   toSummary          → CategorySummaryDto   (listagem paginada)
//   toHttp             → CategoryResponseDto  (detalhes completos)
// ============================================================

import { CategorySummaryDto } from "../../application/dto/category.dto";
import {
  CategoryResponseDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from "../../application/schemas/category.schema";
import { CategoryEntity } from "../entities/category.entity";

export class CategoryMapper {
  // ─── Helper privado ───────────────────────────────────────────────────
  //
  // Centraliza a conversão dos campos comuns a create e update.
  // Evita duplicação (DRY) e garante consistência entre os dois mappers.
  //
  // ⚠️  Usamos ?? (nullish coalescing) e não || (OR lógico):
  //     entity.order pode ser 0  → || "" trataria como falsy (bug silencioso)
  //     entity.slug  pode ser "" → intencionalmente vazio, não deve virar null

  private static toCoreFields(entity: CategoryEntity): CreateCategoryDto {
    return {
      establishmentId: entity.establishmentId?.toString() ?? "",
      patentId: entity.patentId?.toString() ?? null,
      name: entity.name,
      slug: entity.slug?.toString() ?? "",
      order: entity.order,
    };
  }

  // ─── Pós-criação ──────────────────────────────────────────────────────
  //
  // Retorna os campos persistidos imediatamente após o INSERT.
  // Ideal para confirmar ao cliente o que foi salvo.
  //
  // @example
  //   return right(CategoryMapper.toCreatedResponse(entity));

  static toCreatedResponse(entity: CategoryEntity): CreateCategoryDto {
    return this.toCoreFields(entity);
  }

  // ─── Pós-atualização ─────────────────────────────────────────────────
  //
  // Retorna os campos após o UPDATE.
  // Estrutura idêntica ao create; separe aqui caso precise adicionar
  // campos de auditoria (updatedAt, updatedBy, changedFields…).
  //
  // @example
  //   return right(CategoryMapper.toUpdatedResponse(entity));

  static toUpdatedResponse(entity: CategoryEntity): UpdateCategoryDto {
    return this.toCoreFields(entity);
  }

  // ─── Resumo para listagem paginada ───────────────────────────────────
  //
  // Versão compacta da entidade: expõe apenas o necessário para
  // renderizar uma linha de tabela/card, evitando over-fetching.
  //
  // @example
  //   const page = PageResponseMapper.toDto(result, CategoryMapper.toSummary);

  static toSummary(entity: CategoryEntity): CategorySummaryDto {
    return {
      id: entity.id.toString(),
      establishmentId: entity.establishmentId?.toString() ?? "",
      order: entity.order ?? null,
      name: entity.name ?? null,
      visible: entity.visible ?? null,
      status: entity.status,
    };
  }

  // ─── Detalhes completos (GET by id / resposta HTTP) ───────────────────
  //
  // Payload completo enviado em endpoints de detalhe.
  // Inclui campos de auditoria (createdAt) ausentes no resumo.

  static toHttp(entity: CategoryEntity): CategoryResponseDto {
    return {
      id: entity.id.toString(),
      establishmentId: entity.establishmentId?.toString() ?? "",
      order: entity.order,
      name: entity.name,
      visible: entity.visible,
      status: entity.status,
      createdAt: entity.createdAt.toISOString(),
    };
  }
}
