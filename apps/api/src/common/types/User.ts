import type { AuthProvider } from '@prisma/client';

export type ExistsUser = {
  userId: string;
};

export type NewUser = {
  userId: string;
  email: string;
  name: string;
  imageUrl: string;
  displayId: string;
  authProvider: AuthProvider;
};

export type GetUserInfoResult = {
  accessToken: string;
} & (
  | {
      isNewUser: true;
      user: NewUser;
    }
  | {
      isNewUser: false;
      user: ExistsUser;
    }
);
