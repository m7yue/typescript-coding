{
  type OptionalKeys<T, K extends keyof T = keyof T>
    = K extends K
      ? T extends Required<Record<K, T[K]>> // 
        ? never
        : K
      : never

  type Result = OptionalKeys<{ foo: number; bar?: string; baz: boolean }>;// expected to be “bar”

  type OptionalKeys1<T> = keyof {
    [P in keyof T as T extends Required<Pick<T, P>> ? never : P]: T[P]
  }
  type Result1 = OptionalKeys1<{ foo: number; bar?: string; baz: boolean }>;// expected to be “bar”
}