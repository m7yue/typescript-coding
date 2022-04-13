{
  type StringToUnion<S extends string> = S extends `${infer F}${infer Rest}` ? F | StringToUnion<Rest> : never

  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
}