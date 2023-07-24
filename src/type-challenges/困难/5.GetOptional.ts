{
  // type OptionalKeys<T> = {
  //   [K in keyof T]: T[K] & undefined extends never ? never : K;
  // }[keyof T];

  type OptionalKeys<T, K extends keyof T = keyof T>
  = K extends K
    ? T extends Required<Record<K, T[K]>>
      ? never
      : K
    : never

  type GetOptional1<T> = Pick<T, OptionalKeys<T>>

  type GetOptional<T> = {
    [P in keyof T as T extends Required<Pick<T, P>> ? never : P]: T[P]
  }

  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
}