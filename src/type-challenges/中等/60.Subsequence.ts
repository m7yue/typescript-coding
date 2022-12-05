{
  // @Q!!!!
  type Subsequence<T extends unknown[], TArr extends any[] = []>
    = T extends [infer F, ...infer Rest]
      ? [
        [F],
        [...Subsequence<Rest>],
        [...Subsequence<Rest>, F]
      ][number]
      : []

  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
}