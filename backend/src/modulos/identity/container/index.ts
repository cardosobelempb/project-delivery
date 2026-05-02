// ── Repositories ──────────────────────────────────────────────────────────────

import { UserCreateUseCase } from "../application/use-cases/user-create.usecase";
import { PrismaUserRepository } from "../infra/repositories/prisma-user.repository";

const userRepository = new PrismaUserRepository();

// ── Providers ─────────────────────────────────────────────────────────────────

// ── Use Cases ─────────────────────────────────────────────────────────────────

export const userCreateUseCase = new UserCreateUseCase(userRepository);
// export const userFindByIdUseCase = new UserFindByIdUseCase(
//   userRepository,
// );
// export const userUpdateUseCase = new UserUpdateUseCase(
//   userRepository,
// );
// export const userPageUseCase = new UserPageUseCase(userRepository);

// export const userActivateUseCase = new UserActivateUseCase(
//   userRepository,
// );
// export const userDeactivateUseCase = new UserDeactivateUseCase(
//   userRepository,
// );
