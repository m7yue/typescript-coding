  // @Q
  
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // type PromiseResult<T> = T extends Promise<infer Res> ? PromiseResult<Res> : T
  // type PromisesResult<PS>
  //   = PS extends [infer F, ...infer Rest]
  //     ? F extends Promise<any>
  //       ? [PromiseResult<F>, ...PromisesResult<Rest>]
  //       : [F, ...PromisesResult<Rest>]
  //     : []

  // type PromiseAll<P extends any[]> = (promises: readonly [...P]) => PromisesResult<P>
  // declare function PromiseAll<P extends any[]>(promises: readonly [...P]): Promise<PromisesResult<P>>

  declare function PromiseAll<T extends unknown[]>(
    values: readonly [...T]
  ): Promise<{
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
  }>;

  const ps = [promise1, promise2, promise3] as const

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)