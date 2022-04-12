{
  type NumberToArray<T extends number, R extends any[] = []> = R['length'] extends T ? R : NumberToArray<T, [...R, any]>

  type MinusOne<T extends number, Arr extends unknown[] = []>
    = [...Arr, any]['length'] extends T ? Arr['length'] : MinusOne<T, [...Arr, any]>

  type Fibonacci<T extends number, C extends unknown[] = NumberToArray<T>, Res extends unknown[] = []>
    = T extends 0
      ? 0
      : T extends 1 | 2
        ? 1
        : [
          ...NumberToArray<Fibonacci<MinusOne<T>>>,
          ...NumberToArray<Fibonacci<MinusOne<MinusOne<T>>>>
        ]['length']

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
}