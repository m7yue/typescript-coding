{
  /**
   * 判断回文
   */

  type StrLength<T extends string | number, L extends any[] = []>
  = (`${T}`) extends `${infer _}${infer R}` ? StrLength<R, [...L, 0]> : L['length']
  
  type IsPalindrome<T extends string | number>
    = StrLength<T> extends 1 | 0
      ? true
      : `${T}` extends `${infer L}${infer Rest}${infer R}`
        ? `${L}` extends `${R}` // @Q 特殊场景下，用模版标记判断是否相等 
          ? IsPalindrome<Rest>
          : false
        : false


  type T1 = IsPalindrome<'abc'> // false
  type T2 = IsPalindrome<121> // true
}