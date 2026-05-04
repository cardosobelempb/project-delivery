// modules/users/container/users.container.ts

import { UserCreateUseCase } from "../application/use-cases/user-create.usecase";
import { PrismaUserRepository } from "../infra/repositories/prisma-user.repository";

export function makeUsersContainer() {
  // ── Repositories ─────────────────────────────
  const userRepository = new PrismaUserRepository();

  // ── Use Cases ───────────────────────────────
  const userCreateUseCase = new UserCreateUseCase(userRepository);

  return {
    userRepository,
    userCreateUseCase,
  };
}
