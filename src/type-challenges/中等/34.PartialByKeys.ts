{
  /**
   * @Q 在编写复杂类型时，要灵活运用内置的高级类型简化操作
   */

  // type PartialByKeys<T, U extends keyof T> = Partial<Pick<T, U>> & Omit<T, U>
  type PartialByKeys<T, U extends keyof T> = {
    [P in U]?: T[U]
  } & {
    [P in Exclude<keyof T, U>]: T[P]
  }
  

  interface User {
    name: string
    age: number
    address: string
  }
  
  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

  const o: UserPartialName = {
    age: 7,
     address: ''
  }
}