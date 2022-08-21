import { Injectable } from '@nestjs/common';
import type { NewUser } from '@/common/types/User';
import { UserService } from '@/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signUp(data: NewUser) {
    return this.userService.create({ data });
  }
}
