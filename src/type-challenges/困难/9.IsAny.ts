{
  type IsAny<T> = 0 extends (1 & T) ? true : false

  type T1 = IsAny<any>
  type T2 = IsAny<number>
}