import { GithubAuthService } from './githubAuth.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserModule } from '@/user/user.module';
import { UserService } from '@/user/user.service';

@Module({
  imports: [UserModule],
  providers: [GithubAuthService, ConfigService, UserService],
})
export class GithubAuthModule {}
