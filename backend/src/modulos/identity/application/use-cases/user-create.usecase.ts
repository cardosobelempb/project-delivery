import { Either, left, right } from "@/common/domain/errors/handle-errors";
import { AlreadyExistsError } from "@/common/domain/errors/usecases/already-exists.error";
import { UserEntity } from "../../domain/entities/user.entity";

import { UserMapper } from "../../domain/mappers/user.mapper";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDto, UserResponseDto } from "../schemas/user.schema";

export type UserCreateUseCaseResponse = Either<
  AlreadyExistsError,
  UserResponseDto
>;

export class UserCreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<UserCreateUseCaseResponse> {
    if (!input.name || !input.email || !input.passwordHash) {
      return left(
        new AlreadyExistsError({
          message: "User name is required",
          fieldName: "name",
        }),
      );
    }

    const existing = await this.userRepository.findByEmail(input.email);

    if (existing) {
      return left(
        new AlreadyExistsError({
          message: `User with email '${input.email}' already exists`,
          fieldName: "email",
        }),
      );
    }

    const entity = UserEntity.create({
      name: input.name,
      email: input.email,
      passwordHash: input.passwordHash,
    });

    const user = await this.userRepository.create(entity);
    const userDto = UserMapper.toHttp(user);

    return right(userDto);
  }
}
