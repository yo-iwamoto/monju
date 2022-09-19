import { UserService } from './user.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('/example')
  example() {
    return this.userService.get({ userId: '56625097' });
  }
}
