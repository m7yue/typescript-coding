{
  /**
   * @Q
   */
  type IsTuple<T extends readonly unknown[]>
    = number extends T['length'] ? false : true
  
  type A = [number, string]
  type B = A['length'] // 2
  type C = number extends 2 ? true : false // false

  type D = number[]
  type E = D['length'] // number


  /**
   * @Q
   */
  type IsTuple1<T>
    = [T] extends [never]
      ? false
      : T extends readonly [...unknown[]]
        ? any[] extends T
          ? false
          : true
        : false

  type K = any[] extends [number] ? true : false // false
  type K1 = any[] extends number[] ? true : false // true

  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
}