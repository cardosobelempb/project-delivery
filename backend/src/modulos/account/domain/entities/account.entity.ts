import { BaseEntity } from "@/common/domain/entities/base.entity";
import { Optional } from "@/common/domain/types/Optional";
import { UUIDVO } from "@/common/domain/values-objects/uuidvo/uuid.vo";

export interface AuthAccountProps {
  userId: UUIDVO;
  type: string;
  providerAccountId: UUIDVO;
  provider: string;
  createdAt: Date;
  updatedAt: Date | null;
  refreshToken: string | null;
  accessToken: string | null;
  expiresAt: number | null;
  tokenType: string | null;
  scope: string | null;
  idToken: string | null;
  sessionState: string | null;
}

export class AuthAccountEntity extends BaseEntity<AuthAccountProps> {
  get userId(): UUIDVO {
    return this.props.userId;
  }

  get providerAccountId(): UUIDVO {
    return this.props.providerAccountId;
  }

  get provider(): string {
    return this.props.provider;
  }

  get refreshToken(): string | null {
    return this.props.refreshToken;
  }

  get accessToken(): string | null {
    return this.props.accessToken;
  }

  get expiresAt(): number | null {
    return this.props.expiresAt;
  }

  get tokenType(): string | null {
    return this.props.tokenType;
  }

  get scope(): string | null {
    return this.props.scope;
  }

  get idToken(): string | null {
    return this.props.idToken;
  }

  get sessionState(): string | null {
    return this.props.sessionState;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt;
  }

  private touch(): void {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<AuthAccountProps, "createdAt" | "updatedAt">,
    id?: UUIDVO,
  ): AuthAccountEntity {
    return new AuthAccountEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: null,
      },
      id,
    );
  }
}
