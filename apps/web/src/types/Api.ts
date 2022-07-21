import type Prisma from '@prisma/client';

type DateToStr<T> = T extends Date ? string : T;

type JsonSerializedData<T> = {
  [key in keyof T]: DateToStr<T[key]>;
};

export type User = JsonSerializedData<Prisma.User>;
export type Event = JsonSerializedData<Prisma.Event>;
export type EventImage = JsonSerializedData<Prisma.EventImage>;
export type Following = JsonSerializedData<Prisma.Following>;
export type Participation = JsonSerializedData<Prisma.Participation>;
