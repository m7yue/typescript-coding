type F1 =  (a: 1) => 1;

type F2 =  (a: 2) => 2;

type F3 =  (a: 3) => 3;

type F4 =  F1 & F2 & F3;

type T2 = F1 & F2 & F3 & F1 & F2;

type P4 = Parameters<F4>

type F5 = F3 & F4; 

type T3 = [
  F4 extends F1 ? true : false,
  F4 extends F2 ? true : false,
  F4 extends F3 ? true : false,
  F4 extends F1 & F2 ? true : false,
  F4 extends F1 & F3 ? true : false,
  F4 extends F2 & F3 ? true : false,
  F4 extends F1 & F2 & F3 ? true : false,
]

/** 获取的是最后一个 */
type OverLoadFnArgs<T> = T extends (...args: infer A) => infer R ? A : never;
type OverLoadFnReturn<T> = T extends (...args: infer A) => infer R ? R : never;
type TestOverLoadFnArgs = OverLoadFnArgs<F4>
type TestOverLoadFnReturn = OverLoadFnReturn<F4>

type FunctionEntries<T, U = unknown, Acc extends unknown[] = []> = U extends T
? Acc
: (U & T) extends ((...args: infer A) => infer R)
  ? FunctionEntries<T, U & ((...args: A) => R), [((...args: A) => R), ...Acc]>
  : Acc;

type F4Entries = FunctionEntries<F4>

// T & unknown = T

type Async<T, U = unknown, Acc = unknown> = U extends T
  ? Acc
  : (U & T) extends ((...args: infer A) => infer R)
    ? Async<T, U & ((...args: A) => R), ((...args: A) => Promise<R>) & Acc>
    : Acc;

type F4Async = Async<F4>
