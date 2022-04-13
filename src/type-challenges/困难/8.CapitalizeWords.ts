{
  type CapitalizeWords<S extends string, P extends string = ' '>
    = S extends `${infer F}${infer Rest}`
      ? `${P extends ' ' ?  Uppercase<F> : F}${CapitalizeWords<Rest, F>}`
      : ''

  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
}