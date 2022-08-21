import { AuthService } from './auth.service';
import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Env } from '@/common/types/Env';
import { GithubAuthService } from '@/githubAuth/githubAuth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private githubAuthService: GithubAuthService,
    private authService: AuthService,
    private configService: ConfigService<Env, true>
  ) {}

  @Get('/github')
  @Redirect()
  redirectToGitHubAuthorizePage() {
    return {
      url: this.githubAuthService.generateAuthorizationUrl(),
      status: 302,
    };
  }

  @Get('/github/callback')
  @Redirect()
  async handleGitHubCallback(@Query('code') code: string) {
    const result = await this.githubAuthService.getUserInfoFromCode(code);
    if (result.newUser) {
      const user = this.authService.signUp(result);
    }

    return {
      url: this.configService.get('WEBSITE_URL'),
      status: 302,
    };
  }
}
