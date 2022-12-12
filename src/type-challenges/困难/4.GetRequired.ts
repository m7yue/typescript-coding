{
  // @Q
  // type RequiredKeys<T> = {
  //   [K in keyof T]: T[K] & undefined extends never ? K : never;
  // }[keyof T];

  type RequiredKeys<T, K extends keyof T = keyof T>
  = K extends K
    ? T extends Required<Record<K, T[K]>>
      ? K
      : never
    : never
  
  type GetRequired1<T> = {
    [K in RequiredKeys<T>]: T[K];
  };

  type GetRequired<T> = {
    [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
  }

  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }

  type N = { foo: number, bar?: string }['foo'] & undefined
}