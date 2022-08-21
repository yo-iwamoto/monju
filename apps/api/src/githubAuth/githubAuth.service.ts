import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthProvider } from '@prisma/client';
import axios from 'axios';
import type { GitHubEmailsResponse, GitHubUserResponse } from '@/auth/types/github';
import type { Env } from '@/common/types/Env';
import type { GetUserInfoResult } from '@/common/types/User';
import {
  GITHUB_ACCESS_TOKEN_URL,
  GITHUB_AUTHORIZATION_BASE_URL,
  GITHUB_EMAILS_URL,
  GITHUB_OAUTH_SCOPES,
  GITHUB_USER_URL,
} from '@/common/constants/github';
import { setSearchParams } from '@/common/lib/setSearchParams';
import { UserService } from '@/user/user.service';

@Injectable()
export class GithubAuthService {
  constructor(private configService: ConfigService<Env, true>, private userService: UserService) {}

  generateAuthorizationUrl() {
    const clientId = this.configService.get('GITHUB_CLIENT_ID');

    const url = new URL(GITHUB_AUTHORIZATION_BASE_URL);
    setSearchParams(url, { clientId, scope: GITHUB_OAUTH_SCOPES });

    return url.toString();
  }

  async getUserInfoFromCode(code: string): Promise<GetUserInfoResult> {
    const clientId = this.configService.get('GITHUB_CLIENT_ID');
    const clientSecret = this.configService.get('GITHUB_CLIENT_SECRET');

    const url = new URL(GITHUB_ACCESS_TOKEN_URL);
    setSearchParams(url, {
      clientId,
      clientSecret,
      code,
      scope: GITHUB_OAUTH_SCOPES,
    });

    const accessTokenResponse = await axios.post<string>(url.toString());
    const data: Record<string, string> = {};
    accessTokenResponse.data.split('&').map((keyValue) => {
      const [key, value] = keyValue.split('=');
      data[key] = value;
    });
    const accessToken = data['access_token'];
    const userResponse = await axios.get<GitHubUserResponse>(GITHUB_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userId = userResponse.data.id.toString();
    const user = await this.userService.getSafe({ userId });
    if (user !== null) {
      return {
        newUser: false,
        userId,
        accessToken,
      };
    }

    const emailResponse = await axios.get<GitHubEmailsResponse>(GITHUB_EMAILS_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const email = emailResponse.data.find((r) => r.primary)?.email;
    if (!email) {
      throw new Error("unexpected server error: primary email doesn't exists");
    }

    return {
      newUser: true,
      email,
      userId,
      name: userResponse.data.name,
      imageUrl: userResponse.data.avatar_url,
      displayId: userResponse.data.login,
      authProvider: AuthProvider.github,
      accessToken,
    };
  }
}
