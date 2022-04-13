{
  type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

  type MutableKeys<T> = keyof {
    [Key in keyof T as MyEqual<Pick<T, Key>, Readonly<Pick<T, Key>>> extends true ? never : Key ]: any
  }

  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”
}