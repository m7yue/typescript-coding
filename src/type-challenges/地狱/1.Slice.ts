{
  type SliceStartZero<T extends unknown[], I extends number, Res extends unknown[] = []>
    = T extends [infer F, ...infer Rest]
      ? Res['length'] extends I
        ? Res
        : SliceStartZero<Rest, I, [...Res, F]>
      : Res
  
  type DiffTwoArr<T extends unknown[], U extends unknown[]>
    = T extends [infer FT, ...infer RestT]
      ? U extends [infer FU, ...infer RestU]
        ? FT extends FU
          ? DiffTwoArr<RestT, RestU>
          : never
        : never
      : U

  type Slice<T extends unknown[], S extends number, E extends number>
    = DiffTwoArr<SliceStartZero<T, S>, SliceStartZero<T, E>>

  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
}