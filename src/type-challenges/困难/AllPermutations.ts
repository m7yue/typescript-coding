{
  type TupleToUnion<T extends unknown[]> = T[number]

  type UnionPermutations<U, K = U>
    = [U] extends [never]
      ? []
      : U extends U
        ? [U, ...UnionPermutations<Exclude<K, U>>]
        : never

  type B = UnionPermutations<1 | 2 | 3>

  type UnionToIntersection<U>
    = (U extends U ? (arg: U) => void : never) extends (arg: infer B) => void
    ? B
    : never

  type C = UnionToIntersection<{a: 1} | {b:2}>

  type LastInUnion<U>
   = UnionToIntersection<U extends U ? (x: U) => void : never> extends (x: infer L) => void
     ? L
     : never
     
  type K = LastInUnion<1 | 2 | 3>

  type UnionToTuple<U, Last = LastInUnion<U>>
    = [U] extends [never]
      ? []
      : [...UnionToTuple<Exclude<U, Last>>, Last]

  type AllPermutations<T extends unknown[]> =  UnionToTuple<UnionPermutations<TupleToUnion<T>>>

  type R = AllPermutations<[1, 2, 3]>
}