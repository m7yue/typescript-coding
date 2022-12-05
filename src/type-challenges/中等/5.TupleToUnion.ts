{
  type TupleToUnion<T extends readonly unknown[]> = T[number]

  type TupleToUnion1<T extends readonly unknown[]> = T extends [infer P, ...infer Rest] ? P | TupleToUnion1<Rest> : never

  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
}