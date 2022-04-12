{
  type StringToUnion<S extends string> = S extends `${infer F}${infer Rest}` ? F | StringToUnion<Rest> : never

  type GenCombinations<T extends string, K extends string = T>
    = [T] extends [never] // 退出条件很关键
      ? ''
      : T extends T // 起到了遍历的效果
        ? `${T}${GenCombinations<Exclude<K, T>>}` | GenCombinations<Exclude<K, T>>
        : never

  type AllCombinations<S extends string> = GenCombinations<StringToUnion<S>>
  
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
}
