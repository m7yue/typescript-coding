{
  type Reverse<T extends unknown[]>
  = T extends [infer F, ...infer Rest]
    ? [...Reverse<Rest>, F]
    : []

  type FlipArguments<T extends (...args: any[]) => any>
    = T extends (...args: infer Args) => infer R
      ? (...args: Reverse<Args>) => R
      : never


  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> // (arg0: boolean, arg1: number, arg2: string) => void
}

