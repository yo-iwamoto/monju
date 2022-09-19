import { AuthService } from './auth.service';
import { SignInWithGitHubResponse } from './response';
import { Controller, Get, Post, Query, Redirect, Response } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';
import { GithubAuthService } from '@/githubAuth/githubAuth.service';

@Controller('auth')
export class AuthController {
  constructor(private githubAuthService: GithubAuthService, private authService: AuthService) {}

  @Get('/github')
  @Redirect()
  redirectToGitHubAuthorizePage() {
    return {
      url: this.githubAuthService.generateAuthorizationUrl(),
      status: 302,
    };
  }

  @Post('/github/code')
  @ApiOkResponse({ type: SignInWithGitHubResponse })
  async signInWithGitHub(@Query('code') code: string, @Response() rep: FastifyReply) {
    const result = await this.githubAuthService.getUserInfoFromCode(code);
    if (result.isNewUser) {
      await this.authService.register(result.user);
    }

    const token = this.authService.issueToken({
      userId: result.user.userId,
      accessToken: result.accessToken,
    });
    rep.cookie('token', token);

    return {
      token,
    };
  }
}
