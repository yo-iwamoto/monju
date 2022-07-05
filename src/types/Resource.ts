export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
};

export type Event = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  userId: string;
};
