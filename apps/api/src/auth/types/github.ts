export type GitHubEmailsResponse = {
  email: string;
  primary: boolean;
}[];

export type GitHubUserResponse = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
};
