import { BaseEntity } from "@/common/domain/entities/base.entity";
import { Optional } from "@/common/domain/types/Optional";
import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { EntityStatus } from "@/common/shared/enums/entity-status.enum";
import { UserLevel } from "@/common/shared/enums/user-level.enum";
import { YesNoStatus } from "@/common/shared/enums/yes-no-status.enum";

export interface UserProps {
  name: string;
  email: string;
  passwordHash: string;
  level: UserLevel;
  operation: YesNoStatus | null;
  status: EntityStatus;
  recoverKey: string | null;
  keepAlive: string | null;
  commission: string;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export class UserEntity extends BaseEntity<UserProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get passwordHash() {
    return this.props.passwordHash;
  }

  get level() {
    return this.props.level;
  }

  get operation() {
    return this.props.operation;
  }

  get recoverKey() {
    return this.props.recoverKey;
  }

  get keepAlive() {
    return this.props.keepAlive;
  }

  get commission() {
    return this.props.commission;
  }

  get lastLoginAt() {
    return this.props.lastLoginAt;
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
      UserProps,
      | "operation"
      | "recoverKey"
      | "keepAlive"
      | "lastLoginAt"
      | "commission"
      | "level"
      | "status"
      | "createdAt"
      | "updatedAt"
      | "deletedAt"
    >,
    id?: UUIDVO,
  ) {
    return new UserEntity(
      {
        ...props,
        operation: props.operation ?? YesNoStatus.NO,
        commission: props.commission ?? "0",
        recoverKey: props.recoverKey ?? null,
        keepAlive: props.keepAlive ?? null,
        lastLoginAt: props.lastLoginAt ?? null,
        level: props.level ?? UserLevel.CUSTOMER,
        status: props.status ?? EntityStatus.ACTIVE,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id,
    );
  }
}
