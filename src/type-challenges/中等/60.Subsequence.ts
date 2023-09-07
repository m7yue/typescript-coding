{
  // @Q!!!!
  // type Subsequence<T extends unknown[]>
  //   = T extends [infer F, ...infer Rest]
  //     ? [
  //       [F],
  //       [...Subsequence<Rest>],
  //       [F, ...Subsequence<Rest>]
  //     ][number]
  //     : []

  type Subsequence<T> = T extends [infer One, ...infer Rest]
  ? [One] | [...Subsequence<Rest>] | [One, ...Subsequence<Rest>]
  : []

  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
}