{
  type TupleFilter<T extends unknown[], U, Res extends unknown[] = []>
    = T extends [infer F, ...infer Rest]
      ? TupleFilter<Rest, U, [U] extends [F] ? Res : [...Res, F]>
      : Res 

  type Filtered = TupleFilter<[1, 2, null, 3], null> // [1, 2, 3]
}