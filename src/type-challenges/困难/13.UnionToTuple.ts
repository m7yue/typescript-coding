{
  /**
   * UnionToIntersection<{ foo: string } | { bar: string }> =
   *  { foo: string } & { bar: string }.
   */
  type UnionToIntersection<U>
    = (U extends unknown ? (arg: U) => 0 : never) extends (arg: infer I) => 0
    ? I
    : never;
  /**
   * 从 Unoin 类型里面取出最后一个
   * 1. 首先把传入的 Unoin 类型分配构造成函数 Unoin：a | b ==> (() => a) | (() => b)
   * 2. 然后丢进 UnoinToIntersection 处理成交叉类型:(() => a) & (() => b) 这个会被解释为函数重载
   * 3. 然后在条件语句中，函数重载取最后一个值，所以拿到了传入 Unoin 的最后一个值
  */
  type LastInUnion<U>
    = UnionToIntersection<U extends U ? (x: U) => 0 : never> extends (x: infer L) => 0
    ? L
    : never;

  type B = LastInUnion<1 | 2>

  // 在条件语句中，函数重载取最后一个值
  type V = () => 1 & (() => 2) extends () => infer L ? L : never

  /**
   * UnionToTuple<1 | 2> = [1, 2].
   */
  type UnionToTuple<U, Last = LastInUnion<U>>
    = [U] extends [never]
    ? []
    : [...UnionToTuple<Exclude<U, Last>>, Last];


  type T = UnionToTuple<'any' | 'a'>
}