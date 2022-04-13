{
  type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : S;

  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
}