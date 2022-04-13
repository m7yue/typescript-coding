{
  type IfEquals<X, Y, A = X, B = never> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B

  type IsAny<T> = IfEquals<T, any, true, false>

  type T1 = IsAny<any>
  type T2 = IsAny<number>
}