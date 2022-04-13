{
  type AppendToObject<T extends object, U extends string, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V;
  };

  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
}