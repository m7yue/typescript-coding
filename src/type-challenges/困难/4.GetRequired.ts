{
  // @Q
  // type RequiredKeys<T> = {
  //   [K in keyof T]: T[K] & undefined extends never ? K : never;
  // }[keyof T];

  type RequiredKeys<T, K extends keyof T = keyof T>
  = K extends K
    ? T extends Required<Record<K, T[K]>>
      ? K
      : never
    : never

  type Keys = RequiredKeys<{ foo: number; bar?: string }>
  
  type GetRequired1<T> = {
    [K in RequiredKeys<T>]: T[K];
  };

  type GetRequired<T> = {
    [P in (keyof T) as T extends Required<Pick<T, P>> ? P : never]: T[P]
  }

  type I = GetRequired<{
    foo: number;
    bar?: string
  }> // expected to be { foo: number }

  type C1 = [string | undefined] extends [string] ? true : false // true
  type C2 = [string] extends [string | undefined] ? true : false // true

  const c1: string | undefined = 'aaa' // 不报错
  const c2: string = undefined // 不报错

  type D = string extends undefined ? true : false // false
  type E = undefined extends string ? true : false // true

  type Y = { foo: number; bar?: string } extends {bar: number} ? true : false // false
  type Z = { bar?: string } extends Required<{ bar?: string }> ? true : false // true

}