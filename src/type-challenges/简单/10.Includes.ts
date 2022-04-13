import { IsEqual } from '../utils/IsEqual'

{
  type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
    ? IsEqual<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false

  type I0 = Includes<[], 1>; // false
  type I1 = Includes<[2, 2, 3, 1], 2>; // true
  type I2 = Includes<[2, 3, 3, 1], 1>; // true
}