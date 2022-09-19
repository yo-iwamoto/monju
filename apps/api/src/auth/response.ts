import { ApiProperty } from '@nestjs/swagger';

export class SignInWithGitHubResponse {
  @ApiProperty()
  token: string;
}
