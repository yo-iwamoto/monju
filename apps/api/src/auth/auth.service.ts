import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import type { Env } from '@/common/types/Env';
import type { NewUser } from '@/common/types/User';
import { UserService } from '@/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private configService: ConfigService<Env, true>) {}

  async register(data: NewUser) {
    const user = await this.userService.create({ data });
    return user;
  }

  issueToken({ userId, accessToken }: { userId: string; accessToken: string }) {
    return jwt.sign({ userId, accessToken }, this.configService.get('JWT_SECRET'));
  }
}
