{
  type FlattenDepth<T extends unknown[], U = 1, Arr extends unknown[] = []>
    = Arr['length'] extends U
      ? T
      : T extends [infer F, ...infer Rest]
        ? F extends unknown[]
          ? [...FlattenDepth<F, U, [...Arr, any]>, ...FlattenDepth<Rest, U, [...Arr]>]
          : [F, ...FlattenDepth<Rest, U, [...Arr]>]
        : []

  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
}