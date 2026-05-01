// ============================================================
// Category.mapper.ts
// Mappers: Domain → DTO para cada tipo de resposta
//
// ┌─────────────────────────────────────────────────────┐
// │  toCreate  → CategoryPresentDto  (pós criação)  │
// │  toUpdate  → CategoryPresentDto  (pós update)   │
// │  toPage    → CategorySummaryDto  (listagem)     │
// └─────────────────────────────────────────────────────┘
// ============================================================

import {
  CategoryPresenterDto,
  CategorySummaryDto,
} from "../../application/dto/category.dto";
import { CategoryEntity } from "../entities/category.entity";

export class CategoryMapper {
  // ─── Membro → DTO ─────────────────────────────────────────────────────

  /**
   * Mapeia um membro de domínio para DTO de apresentação.
   */
  // private static memberToDto(
  //   member: CategoryMember,
  // ): CategoryMemberPresentDto {
  //   return {
  //     id: member.id.toString(),
  //     userId: member.userId.toString(),
  //     role: member.role,
  //     joinedAt: member.joinedAt.toISOString(),
  //   };
  // }

  // ─── Resposta de criação ──────────────────────────────────────────────

  /**
   * Pós-criação: retorna entidade completa com membros.
   *
   * @example
   * // No use case de criação:
   * return right(CategoryMapper.toCreate(Category));
   */
  static toCreate(entity: CategoryEntity): CategoryPresenterDto {
    return {
      id: entity.id.toString(),
      establishmentId: entity.establishmentId?.toString() || "",
      patentId: entity.patentId ? entity.patentId.toString() : null,
      name: entity.name,
      slug: entity.slug ? entity.slug.toString() : "",
      visible: entity.visible,
      status: entity.status,
      sortOrder: entity.sortOrder,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt ? entity.updatedAt.toISOString() : null,
    };
  }

  // ─── Resposta de atualização ──────────────────────────────────────────

  /**
   * Pós-update: igual ao create, mas sinaliza quais membros
   * foram adicionados/removidos (útil para auditoria/logs).
   *
   * @example
   * // No use case de update:
   * return right(CategoryMapper.toUpdate(Category));
   */
  static toUpdate(entity: CategoryEntity): CategoryPresenterDto {
    // Reutiliza toCreate — mesma estrutura de resposta
    // Aqui você pode enriquecer com campos de auditoria se necessário
    return this.toCreate(entity);
  }

  // ─── Item resumido para page ──────────────────────────────────────────

  /**
   * Listagem paginada: versão compacta sem array de membros,
   * apenas o total — evita over-fetching na listagem.
   *
   * @example
   * // No use case de page:
   * const page = PageResponseMapper.toDto(result, CategoryMapper.toPage);
   */
  static toPage(entity: CategoryEntity): CategorySummaryDto {
    return {
      id: entity.id.toString(),
      establishmentId: entity.establishmentId?.toString() || "",
      sortOrder: entity.sortOrder || null,
      name: entity.name || null,
      visible: entity.visible || null,
      status: entity.status,
    };
  }
}
