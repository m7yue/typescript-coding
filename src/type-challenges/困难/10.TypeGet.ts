{

  type TypeGet<T extends Record<string, any>, K extends string>
    = K extends `${infer F}.${infer Rest}`
      ? TypeGet<T[F], Rest>
      : K extends `${infer H}`
        ? T[H]
        : never

  type Data = {
    foo: {
      bar: {
        value: 'foobar',
        count: 6,
      },
      included: true,
    },
    hello: 'world'
  }
    
  type A = TypeGet<Data, 'hello'> // 'world'
  type B = TypeGet<Data, 'foo.bar.count'> // 6
  type C = TypeGet<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
}