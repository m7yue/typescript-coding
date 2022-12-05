{
  /**
   * @Q
   * PropertyKey
   */
  type TupleToNestedObject<T extends any[], U>
    = T extends [infer F, ...infer Rest]
        ? {
          [P in F as F extends PropertyKey ? F : never]: TupleToNestedObject<Rest, U>
        }
        : U
  
  type P = PropertyKey

  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
}