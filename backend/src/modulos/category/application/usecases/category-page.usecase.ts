import {
  Page,
  PageInput,
} from "@/common/domain/repositories/types/pagination.types";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { PrismaCategoryMapper } from "../../infra/mappers/prisma-category.mapper";
import { CategoryDto } from "../dto/category.dto";

export type CategoryPageUseCaseResponse = Page<CategoryDto>;

export class CategoryPageUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(input: PageInput): Promise<CategoryPageUseCaseResponse> {
    // ─── Busca paginada no repositório ──────────────────────────────────
    const page = await this.categoryRepository.page(input);

    // ─── Mapeia entidades para DTOs de apresentação ──────────────────────
    return {
      ...page,
      content: page.content.map(PrismaCategoryMapper.toDTO),
    };
  }
}
