{
  type TupleFilter<T extends unknown[], U, Res extends unknown[] = []>
    = T extends [infer F, ...infer Rest]
      ? U extends F
        ? TupleFilter<Rest, U, Res> 
        : TupleFilter<Rest, U, [...Res, F]>
      : Res 

  type Filtered = TupleFilter<[1, 2, null, 3], null> // [1, 2, 3]
}