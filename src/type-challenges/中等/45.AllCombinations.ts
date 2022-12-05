{
  /**
   * @Q
   * Exclude<K, T>
   */
  type StringToUnion<S extends string> = S extends `${infer F}${infer Rest}` ? F | StringToUnion<Rest> : never

  type GenCombinations<T extends string, K extends string = T>
    = T extends T
        ? T | `${T}${GenCombinations<Exclude<K, T>>}`
        : never

  type AllCombinations<S extends string> = GenCombinations<StringToUnion<S>>
  
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
}
