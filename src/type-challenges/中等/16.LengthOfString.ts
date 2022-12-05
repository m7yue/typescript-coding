{
  // @Q 结果跟数字有关的，在 ts 类型中大多是用 T['length]
  type LengthOfString<S extends string, Res extends unknown[] = []>
    = S extends `${infer First}${infer Rest}`
      ? LengthOfString<Rest, [...Res, First]>
      : Res["length"];
}