{
  // @Q
  type RequiredByKeys<T, U extends keyof T> = Required<Pick<T, U>> & Omit<T, U>
  // type RequiredByKeys<T, U extends keyof T> = {
  //   [P in U]-?: T[U]
  // } & {
  //   [P in Exclude<keyof T, U>]: T[P]
  // }
  

  interface User {
    name?: string
    age?: number
    address?: string
  }
  
  type UserRequiredName = RequiredByKeys<User, 'name'>

  const o: UserRequiredName = {
    name: '7yue'
  }
}