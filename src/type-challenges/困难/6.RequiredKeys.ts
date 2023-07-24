{
  type RequiredKeys<T, K extends keyof T = keyof T>
    = K extends K
      ? T extends Required<Record<K, T[K]>>
        ? K
        : never
      : never

  type Result = RequiredKeys<{ foo: number; bar?: string; baz: boolean }>;// expected to be "foo" | "baz"

  type RequiredKeys1<T> =  keyof {
    [P in (keyof T) as T extends Required<Pick<T, P>> ? P : never]: T[P]
  }
  type Result1 = RequiredKeys1<{ foo: number; bar?: string; baz: boolean }>;// expected to be "foo" | "baz"

  // @Q
  type D = { foo: number; bar?: string } extends { bar?: string } ? true : false
  type D2 = { bar?: string } extends { bar: string } ? true : false // false
  type D3 = { bar: (string | undefined) } extends { bar: string } ? true : false // true

  // 在 TypeScript 中，子类型的概念是基于赋值兼容性（assignability）的。然而，当我们使用 extends 关键字检查两个类型之间的关系时，子类型的判断并不是基于赋值兼容性。
  // 相反，子类型的判断是基于属性的可靠性（property covariance）的。
  // D2 和 D3 结果不一致的原因是， {bar?: string} 中 bar 是可选的, 而 { bar: (string | undefined) } bar 必须存在，只不过值可为 undefined

  //「属性的可靠性」（property covariance）是 TypeScript 中重要的类型系统概念，它用于判断一个类型是否是另一个类型的子类型。
  // 具体来说，如果类型 T 中的每个属性都可以赋值给类型 U 中对应的属性，那么我们就说 T 是 U 的子类型，或者写成 T extends U。在这里，「每个属性都可以赋值」的意思是：
  // 如果类型 U 中有一个必须存在的属性，那么类型 T 中对应的属性也必须存在，并且类型必须兼容。
  // 如果类型 U 中有一个可选的属性，那么类型 T 中对应的属性可以不存在，或者存在并且类型必须兼容
}