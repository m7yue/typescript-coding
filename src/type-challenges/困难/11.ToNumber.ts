{

  type ToNumber<S extends string, T extends any[] = []>
    = S extends `${T["length"]}`
    ? T['length']
    : ToNumber<S, [...T, any]>

  type T = ToNumber<'999'> // 无法超过 999
}