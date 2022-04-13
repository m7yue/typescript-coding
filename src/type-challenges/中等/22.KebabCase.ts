
// FooBarBaz -> foo-bar-baz
type isCapitalize<C extends string> = C extends Uppercase<C> ? true : false

type KebabCase<S extends string, TS extends string = ''>
  = S extends `${infer F}${infer Rest}`
    ? isCapitalize<F> extends true
      ? TS extends ''
        ? `${KebabCase<Rest, Lowercase<F>>}`
        : `${Lowercase<TS>}-${KebabCase<Rest, Lowercase<F>>}`
      : `${KebabCase<Rest, `${TS}${F}`>}`
    : `${Lowercase<TS>}`


type TestKebabCase = KebabCase<'FooBarBaz'>

