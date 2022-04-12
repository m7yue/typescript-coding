{
  // type PartialByKeys<T, U extends keyof T> = Pick<T, U> & Omit<T, U>
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
}