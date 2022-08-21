import type { AuthProvider } from '@prisma/client';

export type ExistsUser = {
  accessToken: string;
  userId: string;
  newUser: false;
};

export type NewUser = {
  accessToken: string;
  userId: string;
  newUser: true;
  email: string;
  name: string;
  imageUrl: string;
  displayId: string;
  authProvider: AuthProvider;
};

export type GetUserInfoResult = ExistsUser | NewUser;
