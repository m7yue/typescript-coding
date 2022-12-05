{
  type IsInArr<T extends unknown[], M>
    = M extends T[number] ? true : false
  
  type Without<T extends unknown[], U extends unknown[] | unknown, Res extends unknown[] = []>
    = T extends [infer F, ...infer Rest]
      ? Without<
          Rest,
          U,
          IsInArr<U extends unknown[] ? U : [U], F> extends true ? Res : [...Res, F]
        >
      : Res
  
  // @Q
  /**
   * ...infer Rest
   */
  type ToUnion<T> = T extends any[] ? T[number] : T
  type Without1<T extends any[], U>
    = T extends [infer F, ...infer Rest]
      ? F extends ToUnion<U>
        ? Without<Rest, U>
        : [F, ...Without1<Rest, U>]
      : T

  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without1<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
}