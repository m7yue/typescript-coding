{
  type GreaterThan<T extends number, U extends number, Arr extends unknown[] = []>
    = Arr['length'] extends T
      ? false
      : Arr['length'] extends U
        ? true
        : GreaterThan<T, U, [...Arr, any]>


  type T1 = GreaterThan<2, 1> //should be true
  type T2 = GreaterThan<1, 1> //should be false
}