import { ProviderType } from "@/common/shared/enums/provider-type.enum";
import { TokenType } from "@/common/shared/enums/token-type.enum";

interface AccountDto {
  id: string;
  userId: string;
  provider: string;
  providerAccountId: string;
  providerType: ProviderType | null;
  refreshToken: string | null;
  accessToken: string | null;
  expiresAt: number | null;
  tokenType: TokenType | null;
  scope: string | null;
  idToken: string | null;
  sessionState: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface AccountRawDto extends Omit<
  AccountDto,
  "createdAt" | "updatedAt"
> {
  id: string;
  accountId: string;
  provider: string;
  providerAccountId: string;
  passwordHash: string;
}

export interface AccountInputDto extends Omit<
  AccountDto,
  "id" | "createdAt" | "updatedAt"
> {
  accountId: string;
  provider: string;
  providerAccountId: string;
  passwordHash: string;
}

export interface AccountOutputDto extends Omit<AccountDto, "updatedAt"> {
  id: string;
  accountId: string;
  provider: string;
  providerAccountId: string;
  passwordHash: string;
  createdAt: string;
}

export interface AccountOptionalDto extends Partial<AccountDto> {}
