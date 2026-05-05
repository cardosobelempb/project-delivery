import { PageRepository } from "@/common/domain/repositories/page-repository";
import { Prisma } from "../../../../../generated/prisma";
import { AuthAccountEntity } from "../entities/account.entity";

export abstract class AccountRepository extends PageRepository<AuthAccountEntity> {
  abstract findByEmail(email: string): Promise<AuthAccountEntity | null>;
  abstract createWithTx(
    entity: AuthAccountEntity,
    tx: Prisma.TransactionClient,
  ): Promise<AuthAccountEntity>;

  abstract findByCpf(cpf: string): Promise<AuthAccountEntity | null>;
}
