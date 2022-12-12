{
  // @Q
  type Flatten<T> = {
    [P in keyof T]: T[P]
  }
  
  type Merge<T, F> = Flatten<{
    [P in Exclude<keyof T, keyof F>]: T[P]
  } & {
    [P in keyof F]: F[P]
  }>
  
  type Assign<T extends Record<string, unknown>, U>
    = U extends [infer F, ...infer O]
      ? F extends Record<string , unknown>
        ? Assign<Merge<T, F>, O>
        : T
      : T

  type Target = {
    a: 'a'
    d: { 
      hi: 'hi'
    }
  }
  
  type Origin1 = {
    a: 'a1',
    b: 'b'
  }
  
  
  type Origin2 = {
    b: 'b2',
    c: 'c'
  }
  
  type Answer = Assign<Target, [Origin1, Origin2]>
  
  // {
  //    a: 'a1',
  //    b: 'b2',
  //    c: 'c'
  //    d: { 
  //       hi: 'hi'
  //   }
  // }
}