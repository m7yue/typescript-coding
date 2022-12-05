import { IsEqual } from "../utils/IsEqual"

{
  type All<T extends any[], U>
    = T extends [infer First, ...infer Rest]
      ? IsEqual<First, U> extends true
        ? All<Rest, U>
        : false
      : true



  type Test1 = [1, 1, 1]
  type Test2 = [1, 1, 2]

  type Todo = All<Test1, 1> // should be same as true
  type Todo2 = All<Test2, 1> // should be same as false
}