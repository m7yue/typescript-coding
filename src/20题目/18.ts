// https://zhuanlan.zhihu.com/p/438903357

/**
 * 1. 裸类型和非裸类型
 */


/**
 * 将联合类型转为对应的交叉函数类型
 * @template U 联合类型
 */
 type UnionToInterFunction<U> = (U extends any ? (k: () => U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

type UnionToIntersection1<T> = (T extends any
      ? (x: T) => any
      : never
      ) extends (x: infer R) => any
        ? R
        : never;
  
  /**
   * 获取联合类型中的最后一个类型
   * @template U 联合类型
   */
  type GetUnionLast<U> = UnionToInterFunction<U> extends { (): infer A } ? A : never;
  
  /**
   * 在元组类型中前置插入一个新的类型（元素）；
   * @template Tuple 元组类型
   * @template E 新的类型
   */
  type Prepend<Tuple extends any[], E> = [E, ...Tuple];
  
  /**
   * 联合类型转元组类型；
   * @template Union 联合类型
   * @template T 初始元组类型
   * @template Last 传入联合类型中的最后一个类型（元素），自动生成，内部使用
   */
  type UnionToTuple<Union, T extends any[] = [], Last = GetUnionLast<Union>> = {
    0: T;
    1: UnionToTuple<Exclude<Union, Last>, Prepend<T, Last>>;
  }[[Union] extends [never] ? 0 : 1];
  
  type TupleToIntersection<T extends Array<any>> = T extends [infer F, ...infer U]
    ? U extends []
      ? F
      : F & TupleToIntersection<U>
    : never;
  
  type UnionToIntersection<U> = TupleToIntersection<UnionToTuple<U>>;
  
  // 测试用例
  type U0 = UnionToIntersection<string | number>; // never
  type U1 = UnionToIntersection<{ name: string } | { age: number }>; // { name: string; } & { age: number; }
  
  