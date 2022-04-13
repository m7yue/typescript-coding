{
  type RequiredKeys<T, K extends keyof T = keyof T>
    = K extends K
      ? T extends Required<Record<K, T[K]>>
        ? K
        : never
      : never

  type Result = RequiredKeys<{ foo: number; bar?: string; baz: boolean }>;// expected to be “foo”

  type D = { foo: number; bar?: string } extends { bar?: string } ? true : false
}