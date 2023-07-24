{
  type IsAny<T> = 0 extends (1 & T) ? true : false

  type T1 = IsAny<any>
  type T2 = IsAny<number>

  // TypeScript 中的类型宽化规则，即在条件语句中，如果 TypeScript 能够确定一个分支的类型，那么它就会选择这个分支的类型。
}