type TupleToUnion<T extends readonly unknown[]> = T[number]

type TupleToUnion1<T extends readonly unknown[]> = T extends [infer P, ...infer Rest] ? P | TupleToUnion1<Rest> : never
