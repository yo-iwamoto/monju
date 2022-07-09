type ModelBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
};

export type Event = ModelBase & {
  title: string;
  userId: string;
};

export type EventImage = ModelBase & {
  url: string;
  altText: string;
};

export type Following = ModelBase & {
  followedId: string;
  followsId: string;
};

export type Participation = ModelBase & {
  eventId: string;
  userId: string;
};
