{
  type Trunc<T extends string | number>
    = (`${T}`) extends `${infer L}.${infer R}`
      ? L
      : `${T}`

  type A = Trunc<12.34> // 12
}