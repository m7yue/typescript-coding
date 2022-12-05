{
  // @Q [T] extends [never]
  type Permutation<T, K = T> = [T] extends [never]
    ? []
    : T extends T // 起到了遍历的效果
      ? [T, ...Permutation<Exclude<K, T>>]
      : never;

  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
}