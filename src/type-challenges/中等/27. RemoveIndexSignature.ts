{
  type Format<T> = {
    [P in keyof T]: string extends P ? never : T[P]
  }

  type RemoveIndexSignature<T> = {
    [P in keyof Format<T> as Format<T>[P] extends never ? never : P]: T[P]
  }

  type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
}