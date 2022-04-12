{
  type Reverse<T extends unknown[]>
    = T extends [infer F, ...infer Rest]
      ? [...Reverse<Rest>, F]
      : []

  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
}