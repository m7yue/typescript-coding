{
  type Merge<F extends object, S extends object>
    = {
      [K in keyof (F & S)]: K extends keyof S
        ? S[K]
        : K extends keyof F
          ? F[K]
          : never;
    };

  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}