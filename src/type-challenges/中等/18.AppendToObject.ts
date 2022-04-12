type AppendToObject<T extends object, U extends string, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
};