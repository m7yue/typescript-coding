{
  // for-bar-baz -> forBarBaz
  type UppercaseFirst<S extends string>
    = S extends `${infer First}${infer Rest}`
      ? `${Uppercase<First>}${Rest}`
      : ''

  type CamelCase<T extends string, isFirst = true>
    = T extends `${infer F}_${infer Rest}`
      ? isFirst extends true
        ? `${F}${CamelCase<Rest, false>}`
        : `${UppercaseFirst<F>}${CamelCase<Rest>}`
      : T extends `${infer H}`
        ? isFirst extends true
          ? H 
          : UppercaseFirst<H>
        : ''

    type Camelize<T>
      = T extends unknown[]
        ? T extends [infer F, ...infer Rest]
          ? [Camelize<F>, ...Camelize<Rest>]
          : []
        : T extends {}
          ? {
            [P in keyof T as CamelCase<P & string>]: Camelize<T[P]>
          }
          : T


    type T = Camelize<{
      some_prop: string
      prop: { another_prop: string }
      array: [{ snake_case: {b: number} }]
    }>
    
    // expected to be
    // {
    //   someProp: string, 
    //   prop: { anotherProp: string },
    //   array: [{ snakeCase: string }]
    // }
}