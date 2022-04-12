{
  type ObjectEntries<T, U extends keyof T = keyof T>
    = U extends U ? [U, T[U]] : never

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
}