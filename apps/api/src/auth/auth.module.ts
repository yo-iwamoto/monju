import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { GithubAuthModule } from '@/githubAuth/githubAuth.module';
import { GithubAuthService } from '@/githubAuth/githubAuth.service';
import { UserModule } from '@/user/user.module';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [AuthController],
  imports: [GithubAuthModule, UserModule],
  providers: [AuthService, GithubAuthService, UserService],
})
export class AuthModule {}
