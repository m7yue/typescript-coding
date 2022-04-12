{
  type Zip<T extends unknown[], U extends unknown[], Res extends unknown[] = []>
    = T extends [infer TF, ...infer RestF]
      ? U extends [infer TU, ...infer RestU]
        ? Zip<RestF, RestU, [...Res, [TF, TU]]>
        : Res
      : Res

  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
}