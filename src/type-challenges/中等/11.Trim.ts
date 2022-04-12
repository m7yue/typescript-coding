type TrimRight<S extends string> = S extends `${infer Rest}${" " | "\n" | "\t"}`
  ? TrimRight<Rest>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;
