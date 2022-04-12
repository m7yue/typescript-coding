type UnionByArr<T extends Array<any>> = T extends [infer F, ...infer R] ? F | UnionByArr<R> : never;

type Includes<T extends Array<any>, E> = E extends UnionByArr<T> ? true : false

type U = UnionByArr<[2, 2, 3, 1]> // 2 | 3 | 1
type U2 = [2, 2, 3, 1][number] // 2 | 3 | 1

type I0 = Includes<[], 1>; // false
type I1 = Includes<[2, 2, 3, 1], 2>; // true
type I2 = Includes<[2, 3, 3, 1], 1>; // true