import type {
  User as PUser,
  Event as PEvent,
  EventImage as PEventImage,
  Following as PFollowing,
  Participation as PParticipation,
} from '@prisma/client';

type DateToStr<T> = T extends Date ? string : T;

type JsonSerializedData<T> = {
  [key in keyof T]: DateToStr<T[key]>;
};

export type User = JsonSerializedData<PUser>;
export type Event = JsonSerializedData<PEvent>;
export type EventImage = JsonSerializedData<PEventImage>;
export type Following = JsonSerializedData<PFollowing>;
export type Participation = JsonSerializedData<PParticipation>;
