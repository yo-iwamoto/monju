export type Serialized<T> = {
  [property in keyof T]: T[property] extends Date ? string : T[property];
};
