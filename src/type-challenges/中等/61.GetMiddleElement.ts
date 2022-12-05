{
  // @Q
  type GetMiddleElement<T extends readonly unknown[]> = T['length'] extends 0 | 1 | 2
    ? T
    : T extends [unknown, ...infer Middle, unknown]
      ? GetMiddleElement<Middle>
      : never

  type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]> // expected to be [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // expected to be [3, 4]
}