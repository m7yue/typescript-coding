
/**
 * @Q
 */
type Chunk<T extends any[], N extends number = 1, C extends any[] = []> = 
  T extends [infer R, ...infer U]
    ? C['length'] extends N
      ? [C, ...Chunk<T, N>]
      : Chunk<U, N, [...C, R]>
    : C extends []
      ? C
      : [C]

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]