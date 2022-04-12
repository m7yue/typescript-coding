{
  type DropChar<S, C> = S extends `${infer L}${infer R}`
  ? `${L extends C ? "" : L}${DropChar<R, C>}`
  : S;

  type DropChar1<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? `${L}${DropChar1<R, C>}`
  : S;

  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
}