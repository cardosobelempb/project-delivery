import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { User as PrismaUser } from "../../../../../generated/prisma";

import { UserLevel } from "@/shared/enums/user-level.enum";
import { YesNoStatus } from "@/shared/enums/yes-no-status.enum";
import { UserDto } from "../../application/schemas/user.schema";
import { UserEntity } from "../../domain/entities/user.entity";

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): UserEntity {
    return UserEntity.create(
      {
        name: raw.name || "",
        email: raw.email || "",
        passwordHash: raw.passwordHash || "",
        level: raw.level as UserLevel,
        operation: raw.operation as YesNoStatus,
        status: raw.status as EntityStatus,
        recoverKey: raw.recoverKey || "",
        keepAlive: raw.keepAlive || "",
        commission: raw.commission || "",
        lastLoginAt: raw.lastLoginAt,
      },
      UUIDVO.create(raw.id),
    );
  }

  static toDTO(entity: UserEntity): UserDto {
    return {
      id: entity.id.toString(),
      name: entity.name,
      email: entity.email,
      passwordHash: entity.passwordHash,
      level: entity.level,
      operation: entity.operation,
      status: entity.status,
      recoverKey: entity.recoverKey,
      keepAlive: entity.keepAlive,
      commission: entity.commission,
    };
  }

  static toPrisma(entity: UserEntity): PrismaUser {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      email: entity.email,
      passwordHash: entity.passwordHash,
      level: entity.level,
      operation: entity.operation,
      status: entity.status,
      recoverKey: entity.recoverKey,
      keepAlive: entity.keepAlive,
      commission: entity.commission,
      lastLoginAt: entity.lastLoginAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
