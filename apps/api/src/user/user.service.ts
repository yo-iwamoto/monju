import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { NotFoundError } from '@/common/lib/error';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * get user; throws error when data doesn't exist
   * @throws NotFoundError
   */
  async get(param: { userId: string } | { email: string }) {
    const user = await this.getSafe(param);
    if (user === null) {
      throw new NotFoundError();
    }

    return user;
  }

  /**
   * get user; returns null when data doesn't exist
   */
  async getSafe(param: { userId: string } | { email: string }) {
    const where = 'userId' in param ? { userId: param.userId } : { email: param.email };
    return this.prisma.user.findUnique({ where });
  }

  /**
   * create new user record and return it
   */
  async create(param: Prisma.UserCreateArgs) {
    return this.prisma.user.create(param);
  }

  /**
   * return if the record exists
   */
  async exists(param: { userId: string } | { email: string }) {
    const where = 'userId' in param ? { userId: param.userId } : { email: param.email };
    const count = await this.prisma.user.count({
      where,
    });
    return Boolean(count);
  }
}
