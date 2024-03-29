{

  type UnionToIntersection<T>
    // @Q 括号是必须的
    = (T extends any ? (x: T) => any : never) extends (x: infer R) => any
      ? R
      : never

  type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  type D = 'foo' & 42 & true
}
