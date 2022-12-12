{
  type OptionalKeys<T, K extends keyof T = keyof T>
    = K extends K
      ? T extends Required<Record<K, T[K]>> // 
        ? never
        : K
      : never

  type Result = OptionalKeys<{ foo: number; bar?: string; baz: boolean }>;// expected to be “bar”
}