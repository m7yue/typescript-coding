{
  type First<T extends any[]> = T extends [infer F, ...unknown[]] ? F : never;
  type First1<T extends unknown[]> = T extends [] ? never : T[0] // cover Expect<Equal<First<[]>, never>>, 用 T[0]需要考虑数组为空, 因为数组为空 T[0] 会报错 @Q

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
}