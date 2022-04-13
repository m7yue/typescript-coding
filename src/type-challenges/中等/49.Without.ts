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

  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
}