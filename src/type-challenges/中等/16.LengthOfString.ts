type LengthOfString<S extends string, Res extends unknown[] = []>
  = S extends `${infer First}${infer Rest}`
    ? LengthOfString<Rest, [...Res, First]>
    : Res["length"];