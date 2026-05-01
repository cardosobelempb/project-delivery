import { Either, left, right } from "@/common/domain/errors/handle-errors";
import { AlreadyExistsError } from "@/common/domain/errors/usecases/already-exists.error";
import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryMapper } from "../../domain/mappers/categoty.mapper";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import {
  CategoryResponseDto,
  CreateCategoryDto,
} from "../schemas/category.schema";

export type CategoryCreateUseCaseResponse = Either<
  AlreadyExistsError,
  CategoryResponseDto
>;

export class CategoryCreateUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    input: CreateCategoryDto,
  ): Promise<CategoryCreateUseCaseResponse> {
    if (!input.name || !input.establishmentId || !input.order) {
      return left(
        new AlreadyExistsError({
          message: "Category name is required",
          fieldName: "name",
        }),
      );
    }

    const existing = await this.categoryRepository.findByName(input.name);

    if (existing) {
      return left(
        new AlreadyExistsError({
          message: `Category with name '${input.name}' already exists`,
          fieldName: "name",
        }),
      );
    }

    const entity = CategoryEntity.create({
      establishmentId: UUIDVO.create(input.establishmentId),
      patentId: input.patentId ? UUIDVO.create(input.patentId) : null,
      order: input.order,
      name: input.name,
    });

    const category = await this.categoryRepository.create(entity);
    const categoryDto = CategoryMapper.toHttp(category);

    return right(categoryDto);
  }
}
