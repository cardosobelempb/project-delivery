import { SlugVO } from "@/common/domain/values-objects/slug/slug.vo";
import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { VisibilityStatus } from "@/shared/enums/visibility-status.enum";
import { Category as PrismaCategory } from "../../../../../generated/prisma";
import { CategoryDto } from "../../application/dto/category.dto";
import { CategoryEntity } from "../../domain/entities/category.entity";

export class PrismaCategoryMapper {
  static toDomain(raw: PrismaCategory): CategoryEntity {
    return CategoryEntity.create(
      {
        establishmentId: raw.establishmentId
          ? UUIDVO.create(raw.establishmentId)
          : null,
        patentId: raw.parentId ? UUIDVO.create(raw.parentId) : null,
        name: raw.name,
        slug: raw.slug ? SlugVO.create(raw.slug) : null,
        visible: raw.visible as VisibilityStatus,
        status: raw.status as EntityStatus,
        order: raw.order,
        createdAt: new Date(raw.createdAt),
        updatedAt: raw.updatedAt ? new Date(raw.updatedAt) : null,
      },
      UUIDVO.create(raw.id),
    );
  }

  static toDTO(entity: CategoryEntity): CategoryDto {
    return {
      id: entity.id.toString(),
      establishmentId: entity.establishmentId
        ? entity.establishmentId.getValue()
        : null,
      patentId: entity.patentId ? entity.patentId.getValue() : null,
      name: entity.name || "",
      slug: entity.slug ? entity.slug.getValue() : "",
      visible: entity.visible as VisibilityStatus,
      status: entity.status,
      order: entity.order,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ? entity.updatedAt : null,
    };
  }

  static toPrisma(entity: CategoryEntity): PrismaCategory {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      slug: entity.slug?.getValue() || null,
      parentId: entity.patentId ? entity.patentId.getValue() : null,
      establishmentId: entity.establishmentId
        ? entity.establishmentId.getValue()
        : null,
      order: entity.order,
      visible: entity.visible,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
