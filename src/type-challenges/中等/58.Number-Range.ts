{
  /**
   * @Q 
   */
  type AddOn<M, Result extends unknown[] = []>
    = Result['length'] extends M
      ? [...Result, 1]['length']
      : AddOn<M, [...Result, 1]>;

  type NumberRange<L, H, Result extends unknown[] = []> = L extends H
    ? [...Result, L][number]
    : NumberRange<AddOn<L>, H, [...Result, L]>;

  type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
}