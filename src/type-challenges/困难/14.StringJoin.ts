  type Slice<T> = T extends `${infer _}${infer R}` ? R : T 

  type JoinType<T extends any[], JoinSymbol extends string, Result extends string = ''> 
    = T extends [infer L, ...infer R]
      ? JoinType<R, JoinSymbol, `${Result}${JoinSymbol}${L & string}`>
      : JoinSymbol extends '' 
          ? Result 
          : Slice<Result>
  
  declare function join<T extends string>(delimiter: T): <R extends string[]>(...parts: R) => JoinType<R, T>;

  const a = join('#')('a', 'b', 'c') // = 'a#b#c'