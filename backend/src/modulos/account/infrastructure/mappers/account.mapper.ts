import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";
import { AuthAccount as PrismaAuthAccount } from "../../../../../generated/prisma";

import { AuthAccountEntity } from "../../domain/entities/account.entity";

export class AuthAccountMapper {
  static toDomain(raw: PrismaAuthAccount): AuthAccountEntity {
    return AuthAccountEntity.create(
      {
        userId: UUIDVO.create(raw.userId),
        type: raw.type,
        provider: raw.provider,
        providerAccountId: UUIDVO.create(raw.providerAccountId),
        refreshToken: raw.refreshToken,
        accessToken: raw.accessToken,
        expiresAt: raw.expiresAt,
        tokenType: raw.tokenType,
        scope: raw.scope,
        idToken: raw.idToken,
        sessionState: raw.sessionState,
      },
      UUIDVO.create(raw.id),
    );
  }

  static toPersist(entity: AuthAccountEntity) {
    return {
      id: entity.id.toString(),
      userId: entity.userId.getValue(),
      provider: entity.provider,
      providerAccountId: entity.providerAccountId.toString(),
    };
  }

  static toOutput(entity: AuthAccountEntity) {
    return {
      id: entity.id.toString(),
      userId: entity.userId.getValue(),
      provider: entity.provider,
      providerAccountId: entity.providerAccountId.toString(),
    };
  }
}
