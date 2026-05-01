import {
  Page,
  PageInput,
  Sort,
} from "@/common/domain/repositories/types/pagination.types";
import { getPrismaClient } from "@/common/infrastructure/db/prisma.client";
import { EntityStatus } from "@/shared/enums/entity-status.enum";
import { Prisma } from "../../../../../generated/prisma";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { PrismaCategoryMapper } from "../mappers/prisma-category.mapper";

export class PrismaCategoryRepository implements CategoryRepository {
  private prisma = getPrismaClient();

  async page(params: PageInput): Promise<Page<CategoryEntity>> {
    // ─── Paginação (zero-based, padrão Spring Boot) ───────────────────────
    const pageNumber = params.page ?? 0; // Spring começa em 0, não em 1
    const size = params.size ?? 20; // Padrão Spring Data: 20
    const skip = pageNumber * size; // offset = page * size

    // ─── Ordenação (parse do formato 'campo,direção') ──────────────────────
    const [rawSortBy = "createdAt", rawSortDir = "desc"] = (
      params.sort ?? "createdAt,desc"
    ).split(",");

    const allowedSortFields: Array<
      keyof Prisma.CategoryOrderByWithRelationInput
    > = ["name", "slug", "status", "createdAt", "updatedAt"];

    // Garante que somente campos permitidos sejam usados (evita SQL injection por campo)
    const sortBy = allowedSortFields.includes(
      rawSortBy as keyof Prisma.CategoryOrderByWithRelationInput,
    )
      ? (rawSortBy as keyof Prisma.CategoryOrderByWithRelationInput)
      : "createdAt";

    // Garante que a direção seja apenas 'asc' ou 'desc'
    const sortDirection: Prisma.SortOrder =
      rawSortDir === "asc" ? "asc" : "desc";

    const isSorted = !!params.sort;

    // ─── Filtro ────────────────────────────────────────────────────────────
    const filter = params.filter?.trim() ?? "";
    const where = this.buildWhere(filter);

    // ─── Query paginada em transação atômica ──────────────────────────────
    const [totalElements, organizations] = await this.prisma.$transaction([
      this.prisma.category.count({ where }),
      this.prisma.category.findMany({
        where,
        orderBy: { [sortBy]: sortDirection },
        skip,
        take: size,
      }),
    ]);

    // ─── Cálculos derivados ───────────────────────────────────────────────
    const totalPages = Math.ceil(totalElements / size);
    const numberOfElements = organizations.length;
    const isFirst = pageNumber === 0;
    const isLast = pageNumber >= totalPages - 1;
    const isEmpty = numberOfElements === 0;

    // ─── Metadados de sort (espelha Sort do Spring) ───────────────────────
    const sortMeta: Sort = {
      sorted: isSorted,
      unsorted: !isSorted,
      empty: !isSorted,
    };

    // ─── Retorno no contrato Spring Data Page<T> ──────────────────────────
    return {
      content: organizations.map(PrismaCategoryMapper.toDomain),

      pageable: {
        sort: sortMeta,
        offset: skip, // posição absoluta do primeiro elemento
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
      number: pageNumber, // 'number' é o nome do campo no Spring (página atual)
      first: isFirst,
      last: isLast,
      empty: isEmpty,
    };
  }
  private buildWhere(filter: string): Prisma.CategoryWhereInput {
    if (!filter) return {};

    return {
      OR: [
        { name: { contains: filter, mode: "insensitive" } },
        { slug: { contains: filter, mode: "insensitive" } },
        {
          status: { equals: filter.toLocaleUpperCase() as EntityStatus },
        },
      ],
    };
  }
  async findById(id: string): Promise<CategoryEntity | null> {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return null;
    }

    return PrismaCategoryMapper.toDomain(category);
  }
  async findManyByIds(ids: string[]): Promise<CategoryEntity[]> {
    throw new Error("Method not implemented.");
  }
  async create(entity: CategoryEntity): Promise<CategoryEntity> {
    const raw = PrismaCategoryMapper.toPrisma(entity);
    const created = await this.prisma.category.create({
      data: raw,
    });

    return PrismaCategoryMapper.toDomain(created);
  }
  async exists(id: string): Promise<boolean> {
    const category = await this.prisma.category.findUnique({
      where: { id },
      select: { id: true },
    });

    return !!category;
  }
  async findByName(name: string): Promise<CategoryEntity | null> {
    const category = await this.prisma.category.findFirst({
      where: { name },
    });

    if (!category) {
      return null;
    }

    return PrismaCategoryMapper.toDomain(category);
  }

  async save(entity: CategoryEntity): Promise<CategoryEntity> {
    const raw = PrismaCategoryMapper.toPrisma(entity);
    const updated = await this.prisma.category.update({
      where: { id: raw.id },
      data: raw,
    });

    return PrismaCategoryMapper.toDomain(updated);
  }
  async delete(entity: CategoryEntity): Promise<void> {
    await this.prisma.category.delete({
      where: { id: entity.id.getValue() },
    });
  }
}
