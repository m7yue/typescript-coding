{
  /**
   * @Q
   */
  type GenCombination<T extends string, K extends string = T>
    = T extends T
        ? T | `${T} ${GenCombination<Exclude<K, T>>}`
        : never
      
  type Combination<S extends any[]> = GenCombination<S[number]>

  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
}