{

  // type ToNumber<S extends string, T extends any[] = []>
  //   = S extends `${T["length"]}`
  //   ? T['length']
  //   : ToNumber<S, [...T, any]>

  // @Q
  type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never

  type T = ToNumber<'999999999999999'> // 无法超过 999
}