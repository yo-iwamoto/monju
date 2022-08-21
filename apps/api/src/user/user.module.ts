import { UserService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserService],
})
export class UserModule {}
