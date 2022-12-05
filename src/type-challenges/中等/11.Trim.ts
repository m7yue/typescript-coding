{
  type TrimLeft<S extends string>
    = S extends `${' ' | '\n' | '\t'}${infer Rest}`
      ? TrimLeft<Rest>
      : S

  type TrimRight<S extends string>
    = S extends `${infer Rest}${' ' | '\n' | '\t'}`
      ? TrimRight<Rest>
      : S

  type Trim<S extends string> = TrimLeft<TrimRight<S>>;

  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
}
