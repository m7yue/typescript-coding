{
  /**
   * @Q
   * 用 T['length'] 来标记次数
   */
  type FlattenDepth<T extends unknown[], Times = 1, TArr extends unknown[] = []>
    = TArr['length'] extends Times
      ? T
      : T extends [infer F, ...infer Rest]
        ? F extends unknown[]
          ? [
            ...FlattenDepth<F, Times, [...TArr, any]>,
            ...FlattenDepth<Rest, Times, [...TArr]>
          ]
          : [F, ...FlattenDepth<Rest, Times, [...TArr]>]
        : []

  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 3> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
}