type Absolute<T extends number | string | bigint> =
  `${T}` extends `${"-"}${infer Rest}` ? Absolute<Rest> : `${T}`;
