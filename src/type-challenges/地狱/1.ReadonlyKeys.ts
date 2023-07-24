import { IsEqual } from '../utils/IsEqual'

{
  type GetReadonlyKeys<T> = keyof {
    // @Q
    [K in keyof T as IsEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: T[K]
  }

  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }
  
  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
}