// 实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。

type Person = {
    id: string;
    name: string;
    age: number;
    from?: string;
    speak?: string;
  };

type OptionalKeys<T> = NonNullable<{
    [P in keyof T]: undefined extends T[P] ? P : never
}[keyof T]>

type UnOptionalKeys<T> = NonNullable<{
    [P in keyof T]: undefined extends T[P] ? never : P
}[keyof T]>
  
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
type UnPersonOptionalKeys = UnOptionalKeys<Person> // "id" | "name" | "age"

let l:PersonOptionalKeys = 'from'


type A = {
    a: never
    b: string
}
type B = A[keyof A]
  