import { BaseEntity } from "@/common/domain/entities/base.entity";
import { Optional } from "@/common/domain/types/Optional";
import { SlugVO } from "@/common/domain/values-objects/slug/slug.vo";
import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { VisibilityStatus } from "@/shared/enums/visibility-status.enum";

export interface CategoryProps {
  establishmentId: UUIDVO | null;
  patentId: UUIDVO | null;
  order: number;
  name: string | null;
  slug: SlugVO | null;
  visible: VisibilityStatus;
  status: EntityStatus;
  createdAt: Date; // ISO 8601
  updatedAt: Date | null; // ISO 8601
  deletedAt: Date | null; // ISO 8601
}

export class CategoryEntity extends BaseEntity<CategoryProps> {
  get establishmentId() {
    return this.props.establishmentId;
  }

  get patentId() {
    return this.props.patentId;
  }

  get order() {
    return this.props.order;
  }

  get name() {
    return this.props.name;
  }

  get slug() {
    return this.props.slug;
  }

  get visible() {
    return this.props.visible;
  }

  get status() {
    return this.props.status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get deletedAt() {
    return this.props.deletedAt;
  }

  static create(
    props: Optional<
      CategoryProps,
      | "establishmentId"
      | "patentId"
      | "slug"
      | "visible"
      | "status"
      | "createdAt"
      | "updatedAt"
      | "deletedAt"
    >,
    id?: UUIDVO,
  ) {
    return new CategoryEntity(
      {
        ...props,
        establishmentId: props.establishmentId ?? null,
        patentId: props.patentId ?? null,
        slug: props.slug ?? null,
        visible: props.visible ?? VisibilityStatus.VISIBLE,
        status: props.status ?? EntityStatus.ACTIVE,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id,
    );
  }
}
