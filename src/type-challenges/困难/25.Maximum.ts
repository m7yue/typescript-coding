{
  type NumberToArr<N extends number, TArr extends unknown[] = []>
    = TArr['length'] extends N
      ? TArr
      : NumberToArr<N, [...TArr, unknown]>

  type Compare<A extends number, B extends number, F extends -1 | 1 = 1>
    // @Q
    = NumberToArr<A> extends [...NumberToArr<B>, ...infer _]
      ? F extends 1 ? A : B
      : F extends 1 ? B : A

  type GetMax<A extends number, B extends number> = Compare<A, B, 1>

  type Maximum<T extends number[]>
    = T['length'] extends 0
      ? never
      : T['length'] extends 1
        ? T[0]
        : T extends [infer A extends number, infer B extends number, ...infer Rest extends number[]]
          ? Maximum<[GetMax<A, B>, ...Rest]>
          : never

  type Max1 = Maximum<[]> // never
  type Max2 = Maximum<[0, 2, 1]> // 2
  type Max3 = Maximum<[1, 20, 200, 150]> // 200


  type GetMin<A extends number, B extends number> = Compare<A, B, -1>

  type Minimum<T extends number[]>
    = T['length'] extends 0
      ? never
      : T['length'] extends 1
        ? T[0]
        : T extends [infer A extends number, infer B extends number, ...infer Rest extends number[]]
          ? Minimum<[GetMin<A, B>, ...Rest]>
          : never

  type Min1 = Minimum<[]> // never
  type Min2 = Minimum<[0, 2, 1]> // 0
  type Min3 = Minimum<[1, 20, 200, 150]> // 1
}