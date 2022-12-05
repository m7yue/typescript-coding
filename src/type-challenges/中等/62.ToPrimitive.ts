{
  /**
   * @Q
   */
  type ToPrimitive<T>
    = T extends string
      ? string
      : T extends number
        ? number
        : T extends boolean
          ? boolean
          : T extends bigint
            ? bigint
            : T extends symbol
              ? symbol
              : {
                  [K in keyof T]: ToPrimitive<T[K]>
                }

  
  type X = {
    name: 'Tom',
    age: 30,
    married: false,
    addr: {
      home: '123456',
      phone: '13111111111'
    }
  }
  
  type Expected = {
    name: string,
    age: number,
    married: boolean,
    addr: {
      home: string,
      phone: string
    }
  }
  type Todo = ToPrimitive<X> // should be same as `Expected`
}