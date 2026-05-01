import { PageRepository } from "@/common/domain/repositories/page-repository";
import { CategoryEntity } from "@/modulos/category/domain/entities/category.entity";

export abstract class CategoryRepository extends PageRepository<CategoryEntity> {}
