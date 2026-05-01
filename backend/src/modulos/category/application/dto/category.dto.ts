import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { VisibilityStatus } from "@/shared/enums/visibility-status.enum";

export interface CategoryDto {
  id: string;
  establishmentId: string | null;
  patentId: string | null;
  order: unknown;
  name: string;
  slug: string;
  visible: VisibilityStatus;
  status: EntityStatus;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface CreateCategoryDto {
  establishmentId: string | null;
  patentId: string | null;
  order: number;
  name: string | null;
}

// ============================================================
// organization.dto.ts
// DTOs de apresentação: create, update e page
// ============================================================

// ─── Membro ───────────────────────────────────────────────────────────────────
// export interface OrganizationMemberPresentDto {
//   id:             string;
//   userId:         string;
//   role:           string;
//   joinedAt:       string; // ISO 8601
// }

// ─── Organização completa (create / update / getById) ────────────────────────
export interface CategoryPresenterDto {
  id: string;
  establishmentId: string | null;
  patentId: string | null;
  order: number;
  name: string | null;
  slug: string | null;
  visible: VisibilityStatus;
  status: EntityStatus;
  createdAt: string; // ISO 8601
  updatedAt: string | null; // ISO 8601
}

// ─── Item resumido para listagem paginada ─────────────────────────────────────
export interface CategorySummaryDto {
  id: string;
  establishmentId: string | null;
  order: number | null;
  name: string | null;
  visible: VisibilityStatus | null;
  status: EntityStatus;
}

export const createCategoryRawExample: CreateCategoryDto = {
  establishmentId: "00000000-0000-4000-8000-000000000000",
  patentId: null,
  order: 1,
  name: "Exemplo",
};

export const categoryPresenterRawExample: CategoryPresenterDto = {
  id: "00000000-0000-4000-8000-000000000000",
  establishmentId: "00000000-0000-4000-8000-000000000000",
  order: 1,
  patentId: null,
  name: "Exemplo",
  slug: "exemplo",
  visible: VisibilityStatus.VISIBLE,
  status: EntityStatus.ACTIVE,
  createdAt: new Date().toISOString(),
  updatedAt: null,
};
