// 实现一个 Curry 工具类型，用来实现函数类型的柯里化处理。具体的使用示例如下所示：

type Curry<
  F extends (...args: any[]) => any,
  P extends any[] = Parameters<F>,
  R = ReturnType<F>,
> = P['length'] extends 1
    ? (arg: P[0]) => R
    : P extends [infer A, ...infer B]
      ? (arg: A) => Curry<(...args: B) => R>
      : never

type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date

declare function Currying<F extends (...args: any[]) => any>(
  fn: F
): Curry<F>;

const add = (a: number, b: number) => a + b
const three = add(1, 2)
const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
