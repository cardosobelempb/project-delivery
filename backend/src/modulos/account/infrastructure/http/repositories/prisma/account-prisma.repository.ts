import {
  Page,
  PageInput,
  Sort,
} from "@/common/domain/repositories/types/pagination.types";
import { getPrismaClient } from "@/common/infrastructure/db/prisma.client";
import { Prisma } from "../../../../../../../generated/prisma";
import { AuthAccountEntity } from "../../../../domain/entities/account.entity";
import { AccountRepository } from "../../../../domain/repositories/account-repository";
import { AuthAccountMapper } from "../../../mappers/account.mapper";

export class AccountPrismaRepository implements AccountRepository {
  private prisma = getPrismaClient();

  async findByCpf(cpf: string): Promise<AuthAccountEntity | null> {
    const account = await this.prisma.authAccount.findFirst({
      where: { provider: "credentials", providerAccountId: cpf },
      include: { user: true },
    });

    if (!account) return null;
    return AuthAccountMapper.toDomain(account);
  }
  async page(params: PageInput): Promise<Page<AuthAccountEntity>> {
    // ─── Paginação zero-based (padrão Spring) ─────────────────────────────
    const pageNumber = params.page ?? 0; // ✅ zero-based — não mais ?? 1
    const size = params.size ?? 20;
    const skip = pageNumber * size; // ✅ 0 * 20 = 0, 1 * 20 = 20...

    // ─── Ordenação ────────────────────────────────────────────────────────
    const [rawSortBy = "createdAt", rawSortDir = "desc"] = (
      params.sort ?? "createdAt,desc"
    ).split(",");

    const allowedSortFields: Array<
      keyof Prisma.OrganizationOrderByWithRelationInput
    > = ["name", "slug", "status", "createdAt", "updatedAt"];

    const sortBy = allowedSortFields.includes(
      rawSortBy as keyof Prisma.OrganizationOrderByWithRelationInput,
    )
      ? (rawSortBy as keyof Prisma.OrganizationOrderByWithRelationInput)
      : "createdAt";

    const sortDirection: Prisma.SortOrder =
      rawSortDir === "asc" ? "asc" : "desc";

    // ─── Filtro ───────────────────────────────────────────────────────────
    const filter = params.filter?.trim() ?? "";
    const where = this.buildWhere(filter);

    // ─── Query ────────────────────────────────────────────────────────────
    const [totalElements, organizations] = await this.prisma.$transaction([
      this.prisma.organization.count({ where }),
      this.prisma.organization.findMany({
        where,
        orderBy: { [sortBy]: sortDirection },
        skip, // ✅ sempre >= 0
        take: size,
      }),
    ]);

    // ─── Metadados ────────────────────────────────────────────────────────
    const totalPages = Math.ceil(totalElements / size);
    const numberOfElements = organizations.length;
    const isSorted = !!params.sort;

    const sortMeta: Sort = {
      sorted: isSorted,
      unsorted: !isSorted,
      empty: !isSorted,
    };

    return {
      content: organizations.map(AuthAccountMapper.toDomain),
      pageable: {
        sort: sortMeta,
        offset: skip,
        pageSize: size,
        pageNumber,
        paged: true,
        unpaged: false,
      },
      sort: sortMeta,
      totalElements,
      totalPages,
      numberOfElements,
      size,
      number: pageNumber,
      first: pageNumber === 0,
      last: pageNumber >= totalPages - 1,
      empty: numberOfElements === 0,
    };
  }

  private buildWhere(filter: string): Prisma.OrganizationWhereInput {
    if (!filter) return {};

    return {
      OR: [
        { name: { contains: filter, mode: "insensitive" } },
        { slug: { contains: filter, mode: "insensitive" } },
      ],
    };
  }

  async findManyByIds(ids: string[]): Promise<AuthAccountEntity[]> {
    const accounts = await this.prisma.authAccount.findMany({
      where: {
        id: { in: ids },
      },
      include: { user: true },
    });

    return accounts.map(AuthAccountMapper.toDomain);
  }

  async findByUserId(userId: string): Promise<AuthAccountEntity | null> {
    const account = await this.prisma.authAccount.findFirst({
      where: {
        userId,
      },
      include: { user: true },
    });
    if (!account) return null;
    return AuthAccountMapper.toDomain(account);
  }

  async findById(id: string): Promise<AuthAccountEntity | null> {
    const account = await this.prisma.authAccount.findUnique({
      where: { id },
      include: { user: true },
    });
    if (!account) return null;
    return AuthAccountMapper.toDomain(account);
  }

  async exists(id: string): Promise<boolean> {
    const account = await this.prisma.authAccount.findUnique({ where: { id } });
    return !!account;
  }

  async findByEmail(email: string): Promise<AuthAccountEntity | null> {
    const account = await this.prisma.authAccount.findFirst({
      where: {
        provider: "credentials",
        providerAccountId: email,
      },
    });

    if (!account) return null;
    return AuthAccountMapper.toDomain(account);
  }

  async create(entity: AuthAccountEntity): Promise<AuthAccountEntity> {
    const data = AuthAccountMapper.toPersist(entity);

    const account = await this.prisma.authAccount.create({
      data,
    });

    return AuthAccountMapper.toDomain(account);
  }

  async createWithTx(
    entity: AuthAccountEntity,
    tx: Prisma.TransactionClient,
  ): Promise<AuthAccountEntity> {
    const data = AuthAccountMapper.toPersist(entity);
    const account = await tx.authAccount.create({
      data,
    });
    return AuthAccountMapper.toDomain(account);
  }

  async save(entity: AuthAccountEntity): Promise<AuthAccountEntity> {
    const account = await this.prisma.authAccount.update({
      where: { id: entity.id.toString() },
      data: entity,
    });

    return AuthAccountMapper.toDomain(account);
  }

  async delete(entity: AuthAccountEntity): Promise<void> {
    await this.prisma.authAccount.delete({
      where: { id: entity.id.toString() },
    });
  }
}
