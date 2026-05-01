// ── Repositories ──────────────────────────────────────────────────────────────

import { CategoryPageUseCase } from "../application/usecases/category-page.usecase";
import { PrismaCategoryRepository } from "../infra/repositories/prisma-category.repository";

const categoryRepository = new PrismaCategoryRepository();

// ── Providers ─────────────────────────────────────────────────────────────────

// ── Use Cases ─────────────────────────────────────────────────────────────────

// export const categoryCreateUseCase = new CategoryCreateUseCase(
//   categoryRepository,
// );
// export const categoryFindByIdUseCase = new CategoryFindByIdUseCase(
//   categoryRepository,
// );
// export const categoryUpdateUseCase = new CategoryUpdateUseCase(
//   categoryRepository,
// );
export const categoryPageUseCase = new CategoryPageUseCase(categoryRepository);

// export const categoryActivateUseCase = new CategoryActivateUseCase(
//   categoryRepository,
// );
// export const categoryDeactivateUseCase = new CategoryDeactivateUseCase(
//   categoryRepository,
// );
