interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// lib.es5.d.ts
//   type Partial<T> = {
//     [P in keyof T]?: T[P];
//   };

type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type Simplify<T> = {
    [P in keyof T]: T[P]
}
type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>

type SetOptional1<T, K extends keyof T> = {
  [P in K]?: T[P]
}

type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
type SomeOptional1 = SetOptional1<Foo, 'a'>;
/**
  type SomeOptional = {
    a?: number | undefined;
    b?: string | undefined;
    c: boolean;
  }
*/
