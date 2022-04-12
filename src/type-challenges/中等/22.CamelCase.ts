// for-bar-baz -> forBarBaz
type UppercaseFirst<S extends string>
  = S extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : ''

type CamelCase<T extends string, isFirst = true>
  = T extends `${infer F}-${infer Rest}`
    ? isFirst extends true
      ? `${F}${CamelCase<Rest, false>}`
      : `${UppercaseFirst<F>}${CamelCase<Rest>}`
    : T extends ""
      ? ''
      : UppercaseFirst<T>

type Test = CamelCase<'for-bar-baz'>