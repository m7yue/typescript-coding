{

  type Flatten<T extends unknown[]>
  = T extends [infer R, ...infer Rest]
    ? R extends unknown[]
      ? [...Flatten<R>, ...Flatten<Rest>]
      : [R, ...Flatten<Rest>]
    : []


  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

}