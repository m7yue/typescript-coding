{
  type TupleToNestedObject<T extends any[], U>
    = T extends [infer F, ...infer Rest]
        ? {
          [P in Extract<T[number], F>]: TupleToNestedObject<Rest, U>
        }
        : U

  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
}