{
  type IsRequiredKey<T, K extends keyof T = keyof T>
    = T extends Required<Pick<T, K>> ? true : false


  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
}