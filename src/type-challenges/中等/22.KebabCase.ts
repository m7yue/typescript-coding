
// FooBarBaz -> foo-bar-baz
type isCapitalize<C extends string> = C extends Uppercase<C> ? true : false

type KebabCaseItor<S extends string>
  = S extends `${infer F}${infer Rest}`
      ? isCapitalize<F> extends true
        ? `-${Lowercase<F>}${KebabCaseItor<Rest>}`
        : `${F}${KebabCase<Rest>}`
      : ''
type KebabCase<S extends string> = S extends `${infer F}${infer Rest}` ? `${Lowercase<F>}${KebabCaseItor<Rest>}` : never

type TestKebabCase = KebabCase<'FooBarBaz'>

